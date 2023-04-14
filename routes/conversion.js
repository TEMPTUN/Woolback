const express = require("express");
const router = express.Router();
const controller = require("../controller/concontroller.js");


router.get("/mpthree",controller.mpthree)

module.exports = router;