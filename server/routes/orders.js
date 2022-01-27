const { Router } = require("express");

const {
    createOrder,
    captureOrder,
    cancelOrder,
    getClientOrdersByPage,
    getTicket,
} = require("../controllers/order.controller");
const { validateJWT } = require("../middlewares/validate-jwt.middleware");

const router = Router();

router.get("/paginado", validateJWT, getClientOrdersByPage);
// router.get("/ticket/:id", validateJWT, sendTicket); //puede ser a un futuro si no le ha llegado este pero para el admin
router.get("/ticket/:transaction", validateJWT, getTicket);
router.get("/create-order/:tagId", validateJWT, createOrder);
router.get("/capture-order/:uid/:tagId", captureOrder);
router.get("/cancel-order", cancelOrder);

module.exports = router;
