const express = require("express");
const router = express.Router();
const controller = require("../controllers/interview");

// 주의: 여기 앞에 /api/interview를 또 붙이면 안 됩니다!
router.post("/answer", controller.answer);
router.get("/result", controller.result);

module.exports = router;
