const MSG = require('./messages');
const { User } = require('../models');

module.exports = {
  validadeDisplayNameLength: (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) return res.status(400).json({ message: MSG.DISPLAY_NAME_LENGTH });

    next();
  },

  validateIfEmailExists: (req, res, next) => {
    const { email } = req.body;
    if (email === undefined) return res.status(400).json({ message: MSG.EMAIL_REQUIRED });

    next();
  },

  validateEmail: (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email.match(emailRegex)) return res.status(400).json({ message: MSG.INVALID_EMAIL });

    next();
  },

  validateIfPasswordExists: (req, res, next) => {
    const { password } = req.body;
    if (password === undefined) return res.status(400).json({ message: MSG.PASSWORD_REQUIRED });

    next();
  },

  validatePassword: (req, res, next) => {
    const { password } = req.body;
    if (password.length !== 6) return res.status(400).json({ message: MSG.INVALID_PASSWORD });

    next();
  },

  validateUserAlreadyExists: async (req, res, next) => {
    const { email } = req.body;
    const response = await User.findOne({ where: { email } });
    if (response !== null) {
      return res.status(409).json({ message: MSG.USER_ALREADY_EXIST });
    }
  
    next();
  },

  validateIfUserExistsById: async (req, res, next) => {
    const { id } = req.params;
    const userInfos = await User.findByPk(id);
    if (userInfos === null) res.status(404).json({ message: MSG.USER_DOES_NOT_EXIST });

    next();
  },
};
