const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const SignUP = async (req, res) => {
  console.log(req.body);
  const { f_name, l_name, email, pass } = req.body;
  const salt = await bcrypt.genSalt(10); // generating random string.
  const hashedPassword = await bcrypt.hash(pass, salt); //hashing password.
  const tempUser = { f_name, l_name, email, pass: hashedPassword }; //passing hashed password in tempuser

  const user = await User.create({ ...tempUser }); // Creating new user in our database.

  if (!user) {
    res.status(401).json({ msg: "Sorry couldn't create User due to error" });
  }
  //after creating we will  create a jwt token to authenticate user.
  const token = user.Createjwt();

  res.status(200).json({ email: user.email, token });
};

const Login = async (req, res) => {
  // await User.deleteMany();

  console.log("login controller");
  const { email, pass } = req.body;
  // console.log(req.body);
  if (!email || !pass) {
    res.status(401).json({ msg: "Sorry! please provide valid credentials" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).json({ msg: "Sorry ! there is no user" });
  }
  const isPassCorrect = await user.comparePass(pass);
  if (!isPassCorrect) {
    res.status(401).json({ msg: "Sorry ! there passwords don't match" });
  } else {
    const token = user.Createjwt();
    console.log(token);
    res.cookie("jwt", token, { expires: new Date(Date.now() + 25892000000) });
    return res.status(200).json({ msg: "Successful", token });
  }
  // res.status(200).json({ f_name: user.f_name, token }); //passing token back to frontend .
};
module.exports = { SignUP, Login };
