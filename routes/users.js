var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/access", function (req, res, next) {
  res.render("user/access");
});

router.get("/parking", function (req, res, next) {
  res.render("user/parking");
});

router.get("/advanced-booking", function (req, res, next) {
  res.render("user/advanced-booking");
});

module.exports = router;
