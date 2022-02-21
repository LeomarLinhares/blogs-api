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

  getAll: async () => {
    try {
      const allUsers = await User.findAll();
      return allUsers.map((user) => {
        const thisUser = user.dataValues;
        delete thisUser.password;
        return thisUser;
      });
    } catch (error) {
      console.log(error);
    }
  },
};
