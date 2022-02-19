const express = require('express');
const bodyParser = require('body-parser');
const {
  addUser,
} = require('./controllers/userController');
const {
  validadeDisplayNameLength,
  validateIfEmailExists,
  validateEmail,
  validateIfPasswordExists,
} = require('./middlewares/userValidate');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.route('/user')
  .post(
    validadeDisplayNameLength,
    validateIfEmailExists,
    validateEmail,
    validateIfPasswordExists,
    addUser,
  );
