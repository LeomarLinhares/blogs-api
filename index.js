const express = require('express');
const bodyParser = require('body-parser');
const {
  addUser,
  getAllUsers,
  getUserById,
} = require('./controllers/userController');
const { login } = require('./controllers/loginController');
const validateJWT = require('./api/auth/validateJWT');
const {
  validadeDisplayNameLength,
  validateIfEmailExists,
  validateEmail,
  validateIfPasswordExists,
  validatePassword,
  validateUserAlreadyExists,
  emailFieldIsEmpty,
  passwordFieldIsEmpty,
  validateUserNotExists,
  validateIfUserExistsById,
} = require('./middlewares');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.route('/user/:id')
  .get(
    validateJWT,
    validateIfUserExistsById,
    getUserById,
  );

app.route('/user')
  .post(
    validadeDisplayNameLength,
    validateIfEmailExists,
    validateEmail,
    validateIfPasswordExists,
    validatePassword,
    validateUserAlreadyExists,
    addUser,
  )
  .get(
    validateJWT,
    getAllUsers,
  );

app.route('/login')
  .post(
    validateIfEmailExists,
    validateIfPasswordExists,
    emailFieldIsEmpty,
    passwordFieldIsEmpty,
    validateUserNotExists,
    login,
  );