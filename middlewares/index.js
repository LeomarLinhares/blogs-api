const loginValidate = require('./loginValidate');
const userValidate = require('./userValidate');
const categoriesValidate = require('./categoriesValidate');
const postValidate = require('./postValidate');

module.exports = {
  ...loginValidate,
  ...userValidate,
  ...categoriesValidate,
  ...postValidate,
};
