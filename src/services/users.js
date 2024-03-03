const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/user');
const { errorResponse, success } = require('../utils/response');

async function register(payload) {
  const foundUser = await UserModel.findOne({
    $or: [{ email: payload.email }, { phone: payload.phone }],
  });
  if (foundUser) {
    return errorResponse(400, 'Email or Phone exists');
  }

  const salt = await bcrypt.genSalt(10);
  payload.password = await bcrypt.hash(payload.password, salt);

  const newUser = await UserModel.create(payload);
  return success('Registration Successful', newUser);
}

async function login(payload) {
  const foundUser = await UserModel.findOne({ email: payload.email }).lean();
  if (!foundUser) {
    return errorResponse(400, 'User not found');
  }

  const passwordValid = await bcrypt.compare(
    payload.password,
    foundUser.password
  );
  if (!passwordValid) {
    return errorResponse(400, 'Invalid Password');
  }

  const token = jwt.sign(
    {
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email,
      id: foundUser._id,
    },
    process.env.JWT_SECRET
  );

  return success('Login Successful', { ...foundUser, token });
}

module.exports = {
  register,
  login,
};
