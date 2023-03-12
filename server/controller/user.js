const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");

const SignUP = async (req, res) => {
  const { f_name, l_name, email, pass } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(pass, salt);
  const tempUser = { f_name, l_name, email, pass: hashedPassword };

  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};
module.exports = { SignUP };
