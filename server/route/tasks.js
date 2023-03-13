const express = require("express");
const router = express.Router();

const { Createpdf, Fetchpdf, temp } = require("../controller/tasks");

router.route("/create-pdf/:id").post(Createpdf);
router.route("/").get(temp);
router.route("/fetch-pdf").get(Fetchpdf);

module.exports = router;
