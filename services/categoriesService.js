const { Category } = require('../models');

module.exports = {
  create: async (body) => {
    const response = await Category.create(body);
    return response.dataValues;
  },

  getAll: async () => {
    const allCategories = Category.findAll();
    return allCategories;
  },
};