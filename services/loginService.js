require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = {
  getToken: (email) => {
    try {
      const response = jwt.sign({ email }, process.env.JWT_SECRET, jwtConfig);
      return { token: response };
    } catch (error) {
      console.log(error);
    }
  },
};