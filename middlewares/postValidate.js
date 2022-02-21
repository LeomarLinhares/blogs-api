const MSG = require('./messages');

module.exports = {
  validateIfTitleExists: (req, res, next) => {
    const { title } = req.body;
    if (title === undefined) return res.status(400).json({ message: MSG.TITLE_REQUIRED });

    next();
  },

  validateIfContentExists: (req, res, next) => {
    const { content } = req.body;
    if (content === undefined) return res.status(400).json({ message: MSG.CONTENT_REQUIRED });

    next();
  },
};
