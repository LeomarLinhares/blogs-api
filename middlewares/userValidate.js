const MSG = require('./messages');

module.exports = {
  validadeDisplayNameLength: (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) return res.status(400).json({ message: MSG.DISPLAY_NAME_LENGTH });
    next();
  },
};
