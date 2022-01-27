const { Router } = require("express");

const { createReport } = require("../controllers/report.controller");

const router = Router();

router.post("/", createReport);

module.exports = router;
