const usersRoute = require('express').Router();
const { AllUsers,UpdateUser,DeleteUser } = require('../controllers/users.controller');



usersRoute.get('/users',AllUsers)
usersRoute.put('/users/:id',UpdateUser)
usersRoute.delete('/users/:id',DeleteUser)


module.exports=usersRoute;