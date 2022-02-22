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

  getPostById: async (req, res) => {
    const { id } = req.params;
    const response = await postService.getById(id);
    res.status(200).json(response);
  },

  updatePost: async (req, res) => {
    const { id } = req.params;
    const response = await postService.update(id, req.body);
    res.status(200).json(response);
  },

  deletePost: async (req, res) => {
    const { id } = req.params;
    await postService.remove(id);
    res.status(204).end();
  },
};
