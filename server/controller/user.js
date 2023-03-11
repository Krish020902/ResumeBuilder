const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const SignUP = async (req, res) => {
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};
module.exports = { SignUP };
