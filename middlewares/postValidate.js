const MSG = require('./messages');
const { Category } = require('../models');

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

  validateIfCategoryIdsExists: (req, res, next) => {
    const { categoryIds } = req.body;
    if (categoryIds === undefined) {
      return res.status(400).json({ message: MSG.CATEGORY_IDS_REQUIRED });
    }
  
    next();
  },

  validateIfInformedCategoryIdExistsInDatabase: async (req, res, next) => {
    const { categoryIds } = req.body;
    const allCategories = await Category.findAll();
    const allCategoriesExists = categoryIds
      .reduce((acc, curr) => allCategories
      .some((category) => category.id === curr) && acc, true);
    
    if (!allCategoriesExists) return res.status(400).json({ message: MSG.CATEGORY_ID_NOT_FOUND });
  
    next();
  },
};
