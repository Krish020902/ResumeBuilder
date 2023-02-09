const express = require("express");
const cors = require("cors");
const pdf = require("html-pdf");
const task = require("./route/tasks");
const t3 = require("./pdf-sample/t3");
const t1 = require("./pdf-sample/t1");
const t2 = require("./pdf-sample/t2");

const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create-pdf/:id", (req, res) => {
  // console.log(id);

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
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/Resume.pdf`);
});

// app.use(express.static("../client/build"));

app.listen(port, () => {
  console.log(`Server is running on port=${port}`);
});
