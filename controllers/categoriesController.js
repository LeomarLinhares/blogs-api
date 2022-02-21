const categoriesService = require('../services/categoriesService');

module.exports = {
  createCategory: async (req, res) => {
    try {
      const response = await categoriesService.create(req.body);
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
    }
  },

  getAllCategories: async (_req, res) => {
    try {
      const response = await categoriesService.getAll();
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
