require('dotenv').config();
const jwt = require('jsonwebtoken');
const { BlogPost, User, PostsCategory, Category } = require('../models');

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

  getAll: async () => {
    const response = BlogPost.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
        },
      ],
    });

    return response;
  },

  getById: async (id) => {
    try {
      const response = BlogPost.findOne({ where: { id },
        include: [
          {
            model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
          },
          { model: Category, as: 'categories' },
        ],
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  update: async (id, { title, content }) => {
    await BlogPost.update({ title, content }, { where: { id } });

    const updated = await BlogPost.findOne({
      where: { id },
      attributes: { exclude: ['id', 'published', 'updated'] },
      include: [
        { model: Category, as: 'categories' },
      ],
    });

    return updated;
  },

  remove: async (id) => {
    await BlogPost.destroy({ where: { id } });
  },
};
