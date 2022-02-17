const { User } = require('../models');

module.exports = {
  create: async ({ displayName, email, password, image }) => {
    try {
      const createdUser = await User.create({ displayName, email, password, image });
      return createdUser;
    } catch (error) {
      console.log(error);
    }
  },
};
