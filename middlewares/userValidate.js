const MSG = require('./messages');

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
};
