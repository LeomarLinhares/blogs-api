const categoriesService = require('../services/categoriesService');

module.exports = {
  createCategory: async (req, res) => {
    const response = await categoriesService.create(req.body);
    res.status(201).json(response);
  },
};
