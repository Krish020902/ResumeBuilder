const pdf = require("html-pdf");
const t3 = require("../pdf-sample/t1");
const t1 = require("../pdf-sample/t2");
const t2 = require("../pdf-sample/t3");
const t4 = require("../pdf-sample/t4");
const User = require("../model/User");

const Createpdf = async (req, res) => {
  console.log("inside Create pddf");
  const { userID, email } = req.user;
  const {
    id,
    fname,
    lname,
    phone,
    linkedin,
    github,
    skills,
    exp1_org,
    exp1_pos,
    exp1_desc,
    exp1_dur,
    proj1_title,
    proj1_link,
    proj1_desc,
    proj2_title,
    proj2_link,
    proj2_desc,
    edu1_school,
    edu1_year,
    edu1_qualification,
    edu1_desc,
    extra_1,
    extra_2,
  } = req.body;
  const FindUser = await User.findOne({ email });
  FindUser.cv = [
    {
      id,
      fname,
      email,
      lname,
      phone,
      linkedin,
      github,
      skills,
      exp1_org,
      exp1_pos,
      exp1_desc,
      exp1_dur,
      proj1_title,
      proj1_link,
      proj1_desc,
      proj2_title,
      proj2_link,
      proj2_desc,
      edu1_school,
      edu1_year,
      edu1_qualification,
      edu1_desc,
      extra_1,
      extra_2,
    },
  ];

  await FindUser.save();

  const idcheck = req.params.id;
  console.log(req.body);
  if (idcheck == 1) {
    pdf.create(t1(req.body), {}).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("Success");
    });
  }
  if (idcheck == 2) {
    pdf.create(t2(req.body), {}).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("Success");
    });
  }
  if (idcheck == 3) {
    pdf.create(t3(req.body), {}).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("Success");
    });
  }
  if (idcheck == 4) {
    pdf.create(t4(req.body), {}).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("Success");
    });
  }
};

const Fetchpdf = async (req, res) => {
  res.sendFile(`${__dirname}/Resume.pdf`);
};

const temp = (req, res) => {
  res.json({ valid: true });
};
module.exports = { Createpdf, Fetchpdf, temp };
