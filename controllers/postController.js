const postService = require('../services/postService');

module.exports = {
  createPost: async (req, res) => {
    const token = req.headers.authorization;
    const response = await postService.create(req.body, token);
    res.status(201).json(response);
  },
};
