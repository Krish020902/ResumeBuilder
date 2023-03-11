const pdf = require("html-pdf");
const t3 = require("../pdf-sample/t1");
const t1 = require("../pdf-sample/t2");
const t2 = require("../pdf-sample/t3");
const t4 = require("../pdf-sample/t4");
const Createpdf = async (req, res) => {
  const id = req.params.id;

  if (id == 1) {
    pdf.create(t1(req.body), {}).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("Success");
    });
  }
  if (id == 2) {
    pdf.create(t2(req.body), {}).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("Success");
    });
  }
  if (id == 3) {
    pdf.create(t3(req.body), {}).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("Success");
    });
  }
  if (id == 4) {
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

module.exports = { Createpdf, Fetchpdf };
