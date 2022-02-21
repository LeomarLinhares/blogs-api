const loginService = require('../services/loginService');

module.exports = {
  login: async (req, res) => {
    const { email } = req.body;
    const response = await loginService.getToken(email);
    res.status(200).json(response);
  },
};