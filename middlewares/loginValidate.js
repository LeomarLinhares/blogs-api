const { User } = require('../models');
const MSG = require('./messages');

module.exports = {
  emailFieldIsEmpty: (req, res, next) => {
    const { email } = req.body;
    if (email.length === 0) return res.status(400).json({ message: MSG.ER_EMPTY_EMAIL });

    next();
  },

  passwordFieldIsEmpty: (req, res, next) => {
    const { password } = req.body;
    if (password.length === 0) return res.status(400).json({ message: MSG.ER_EMPTY_PASSWORD });

    next();
  },

  validateUserNotExists: async (req, res, next) => {
    const { email } = req.body;
    const response = await User.findOne({ where: { email } });
    if (response === null) {
      return res.status(400).json({ message: MSG.INVALID_FIELDS });
    }
  
    next();
  },
};
