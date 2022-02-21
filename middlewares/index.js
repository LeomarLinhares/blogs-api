const loginValidate = require('./loginValidate');
const userValidate = require('./userValidate');
const categoriesValidate = require('./categoriesValidate');

module.exports = {
  ...loginValidate,
  ...userValidate,
  ...categoriesValidate,
};
