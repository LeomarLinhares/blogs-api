const postService = require('../services/postService');

module.exports = {
  createPost: async (req, res) => {
    const token = req.headers.authorization;
    const response = await postService.create(req.body, token);
    res.status(201).json(response);
  },

  getAllPosts: async (_req, res) => {
    const response = await postService.getAll();
    res.status(200).json(response);
  },
};
