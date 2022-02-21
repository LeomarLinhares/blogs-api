const express = require('express');
const bodyParser = require('body-parser');
const validateJWT = require('./api/auth/validateJWT');

const {
  addUser,
  getAllUsers,
  getUserById,
  login,
  createCategory,
  getAllCategories,
} = require('./controllers');
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
  validateIfThereIsAName,
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

app.route('/categories')
  .post(
    validateJWT,
    validateIfThereIsAName,
    createCategory,
  )
  .get(
    validateJWT,
    getAllCategories,
  );
