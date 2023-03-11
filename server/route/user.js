const express = require("express");
const router = express.Router();
const { SignUP } = require("../controller/user");
router.route("/signin").post(SignUP);
module.exports = router;
