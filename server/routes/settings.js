const { Router } = require("express");

const {
    getCategories,
    getIGV,
    getBlackLogo,
    getWhiteLogo,
} = require("../controllers/setting.controller");

const router = Router();

router.get("/black-logo", getBlackLogo);
router.get("/white-logo", getWhiteLogo);
router.get("/igv", getIGV);
router.get("/categories", getCategories);

module.exports = router;
