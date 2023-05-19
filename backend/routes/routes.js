const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.get("/", (req, res, next) => {
  return res.json({ success: true, msg: "Hello" });
});

router.post("/postData", controllers.postData);

module.exports = router;
