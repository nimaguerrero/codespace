const { Router } = require("express");
const router = Router();

const {
    sendEmail,
    updatePassword,
    getTimeCode,
} = require("../controllers/change-password.controller");

router.post("/email", sendEmail);
router.get("/:code", getTimeCode);
router.post("/update-password", updatePassword);

module.exports = router;
