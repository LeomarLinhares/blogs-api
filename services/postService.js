require('dotenv').config();
const jwt = require('jsonwebtoken');
const { BlogPost, User, PostsCategory } = require('../models');

const secret = process.env.JWT_SECRET;

module.exports = {
  create: async ({ title, content, categoryIds }, token) => {
    const { email } = jwt.verify(token, secret);
    const { id } = await User.findOne({ where: { email } });
    const createdPost = await BlogPost.create({
      title,
      content,
      published: new Date(),
      updated: new Date(),
      userId: id,
    });

    Promise.all(categoryIds.map(async (categoryId) => {
      const result = await PostsCategory.create({ postId: createdPost.id, categoryId });
      return result;
    }));

    return { id: createdPost.id, userId: id, title, content };
  },
};
