const { Sequelize, DataTypes } = require("sequelize");
const config = require('../config/config.js')

const connection = new Sequelize(config.database,config.user,config.password,{
    host: "127.0.0.1",
    dialect: "mysql",
    logging:false
  }
);



const BuyMeAll={}
BuyMeAll.connection=connection
BuyMeAll.Sequelize=Sequelize
BuyMeAll.Users = require ('./users.js')(connection,DataTypes)
BuyMeAll.Product = require ('./product.js')(connection,DataTypes)
BuyMeAll.Categories = require ('./categories.js')(connection,DataTypes)
BuyMeAll.orders= connection.define('orders',{ 
 send:{
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue:false
}})
BuyMeAll.Favorite= connection.define('favorite',{},{timestamps:false})


BuyMeAll.Users.belongsToMany(BuyMeAll.Product ,{ through: 'orders' })
BuyMeAll.Product.belongsToMany(BuyMeAll.Users ,{ through: 'orders' })
BuyMeAll.Users.belongsToMany(BuyMeAll.Product ,{ through: 'favorite' })
BuyMeAll.Product.belongsToMany(BuyMeAll.Users ,{ through: 'favorite' })
BuyMeAll.Categories.hasMany(BuyMeAll.Product)
BuyMeAll.Product.belongsTo(BuyMeAll.Categories)



BuyMeAll.connection.authenticate()

BuyMeAll.connection.sync({ force: false })
  .then(() => {
    console.log("tables created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports=BuyMeAll
