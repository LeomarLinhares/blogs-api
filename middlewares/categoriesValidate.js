const MSG = require('./messages');

module.exports = {
  validateIfThereIsAName: (req, res, next) => {
    if (req.body.name === undefined) return res.status(400).json({ message: MSG.NAME_REQUIRED });
    
    next();
  },
};
