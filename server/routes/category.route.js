const categoryRoute = require('express').Router();
const {AllCategory,OneCategory,AddCategory,DeleteCategory,updateCategory} = require('../controllers/category.controller');



categoryRoute.get('/category',AllCategory)
categoryRoute.get('/category/:id',OneCategory)
categoryRoute.post('/category',AddCategory)
categoryRoute.delete('/category/:id',DeleteCategory)
categoryRoute.put('/category/:id',updateCategory)


module.exports=categoryRoute;