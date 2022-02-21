const userService = require('../services/userService');

module.exports = {
  addUser: async (req, res) => {
    const response = await userService.create(req.body);
    res.status(201).json(response);
  },

  getAllUsers: async (_req, res) => {
    const response = await userService.getAll();
    res.status(200).json(response);
  },
};
