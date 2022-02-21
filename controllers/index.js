const loginController = require('./loginController');
const userController = require('./userController');
const categoriesController = require('./categoriesController');
const postController = require('./postController');

module.exports = {
  ...loginController,
  ...userController,
  ...categoriesController,
  ...postController,
};
