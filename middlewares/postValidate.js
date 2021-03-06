require('dotenv').config();
const jwt = require('jsonwebtoken');
const MSG = require('./messages');
const { Category, BlogPost, User } = require('../models');

const secret = process.env.JWT_SECRET;

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

  validateIfPostExistsInDatabase: async (req, res, next) => {
    const { id } = req.params;
    const post = await BlogPost.findByPk(id);
    if (post === null) return res.status(404).json({ message: MSG.POST_NOT_FOUND });

    next();
  },

  validateIfCategoryIsBeingModified: async (req, res, next) => {
    if (req.body.categoryIds !== undefined) {
      return res.status(400).json({ message: MSG.CATEGORY_IDS_CANT_BE_MODIFIED });
    }

    next();
  },

  validateUserAuthorization: async (req, res, next) => {
    const token = req.headers.authorization;
    const { id } = req.params;
    const { userId } = await BlogPost.findByPk(id);
    const { email: userEmail } = await User.findByPk(userId);
    try {
      const { email } = jwt.verify(token, secret);
      if (email !== userEmail) return res.status(401).json({ message: MSG.UNAUTHORIZED_USER });
    } catch (error) {
      console.log(error);
    }

    next();
  },
};
