const express = require("express");
const usersRoute =require('./routes/users.routes')
const ordersRouter =require('./routes/orders.routes')
const favoriteRoute =require('./routes/favorite.routes')
const productRouter =require('./routes/product.routes')
const categoryRoute =require('./routes/category.route')
const authController =require('./controllers/auth.controller')
const cors = require('cors')

const db = require('./database-Sequelize');
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())

app.post('/api/BuyMeAll/signup',authController.signUp)
app.post('/api/BuyMeAll/signin',authController.signIn)
app.use("/api/BuyMeAll",usersRoute)
app.use("/api/BuyMeAll",ordersRouter)
app.use("/api/BuyMeAll",favoriteRoute)
app.use("/api/BuyMeAll",productRouter)
app.use("/api/BuyMeAll",categoryRoute)




app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
