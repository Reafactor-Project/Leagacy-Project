const ordersRouter = require('express').Router();
const { AllOrders,AddOrders,UpdateStatus } = require('../controllers/orders.controller');



ordersRouter.get('/orders',AllOrders)
ordersRouter.post('/orders',AddOrders)
ordersRouter.put('/orders/:id',UpdateStatus)



module.exports=ordersRouter