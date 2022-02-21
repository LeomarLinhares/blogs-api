const loginController = require('./loginController');
const userController = require('./userController');
const categoriesController = require('./categoriesController');

module.exports = {
  ...loginController,
  ...userController,
  ...categoriesController,
};
