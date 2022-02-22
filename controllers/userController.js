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

  getUserById: async (req, res) => {
    const { id } = req.params;
    const response = await userService.getById(id);
    res.status(200).json(response);
  },

  deleteMe: async (req, res) => {
    const token = req.headers.authorization;
    await userService.remove(token);
    res.status(204).end();
  },
};
