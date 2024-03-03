const usersServices = require('../services/users');

async function register(req, res) {
  try {
    const data = await usersServices.register(req.body);
    return res.status(data.statusCode).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Unable to register user' });
  }
}

async function login(req, res) {
  try {
    const data = await usersServices.login(req.body);
    return res.status(data.statusCode).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Unable to login' });
  }
}

module.exports = {
  register,
  login,
};
