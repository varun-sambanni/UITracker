const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.get("/getEventLogs", controllers.getEventLogs);

router.get("/clear", controllers.getClear);

router.post("/postData", controllers.postData);

router.get("/", (req, res, next) => {
  return res.json({ success: true, msg: "Hello..." });
});

module.exports = router;
