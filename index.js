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
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  deleteMe,
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
  validateIfTitleExists,
  validateIfContentExists,
  validateIfCategoryIdsExists,
  validateIfInformedCategoryIdExistsInDatabase,
  validateIfPostExistsInDatabase,
  validateIfCategoryIsBeingModified,
  validateUserAuthorization,
  validateUserAuthorizationToDeleteYourself,
} = require('./middlewares');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.route('/user/me')
  .delete(
    validateJWT,
    validateUserAuthorizationToDeleteYourself,
    deleteMe,
  );

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

app.route('/post/:id')
  .get(
    validateJWT,
    validateIfPostExistsInDatabase,
    getPostById,
  )
  .put(
    validateJWT,
    validateIfCategoryIsBeingModified,
    validateUserAuthorization,
    validateIfTitleExists,
    validateIfContentExists,
    updatePost,
  )
  .delete(
    validateJWT,
    validateIfPostExistsInDatabase,
    validateUserAuthorization,
    deletePost,
  );

app.route('/post')
  .post(
    validateJWT,
    validateIfTitleExists,
    validateIfContentExists,
    validateIfCategoryIdsExists,
    validateIfInformedCategoryIdExistsInDatabase,
    createPost,
  )
  .get(
    validateJWT,
    getAllPosts,
  );
