var express = require("express");
var router = express.Router();

router.get("/list", function (req, res) {
  res.render("bbsList");
});

module.exports = router;
