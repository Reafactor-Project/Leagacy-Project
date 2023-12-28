const favoriteRoute = require('express').Router();
const {UsersFav,AddToFav,RemoveFav} = require('../controllers/favorite.controller');


favoriteRoute.get('/favorite/:id',UsersFav)
favoriteRoute.post('/favorite',AddToFav)
favoriteRoute.delete('/favorite',RemoveFav)


module.exports=favoriteRoute