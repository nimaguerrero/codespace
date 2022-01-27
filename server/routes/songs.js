const { Router } = require("express");

const { getSongsByPage, getSong } = require("../controllers/song.controller");

const router = Router();

router.get("/paginado", getSongsByPage);
router.get("/:id", getSong);

module.exports = router;
