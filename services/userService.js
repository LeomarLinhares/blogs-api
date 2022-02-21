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

  getById: async (id) => {
    try {
      const { dataValues } = await User.findByPk(id);
      delete dataValues.password;
      return dataValues;
    } catch (error) {
      console.log(error);
    }
  },
};
