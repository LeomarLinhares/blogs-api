const loginValidate = require('./loginValidate');
const userValidate = require('./userValidate');

module.exports = {
  ...loginValidate,
  ...userValidate,
};
