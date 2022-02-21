const MSG = require('./messages');

module.exports = {
  emailFieldIsEmpty: (req, res, next) => {
    const { email } = req.body;
    if (email.length === 0) return res.status(400).json({ message: MSG.ER_EMPTY_EMAIL });

    next();
  },
};
