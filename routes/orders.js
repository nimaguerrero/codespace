const { Router } = require('express')

const {
  createOrder,
  getDetails,
  captureOrder,
  cancelOrder,
  getClientOrdersByPage,
  getTicket
} = require('../controllers/order')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()

router.get('/paginado', validateJWT, getClientOrdersByPage)
router.get('/details/:orderId', validateJWT, getDetails)
router.get('/ticket/:transaction', validateJWT, getTicket)
router.get('/create-order/:projectId', validateJWT, createOrder)
router.get('/capture-order/:uid/:projectId', captureOrder)
router.get('/cancel-order', cancelOrder)

module.exports = router
