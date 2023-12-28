const Product =(connection,DataTypes)=>{
    return connection.define("product", {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image : {
        type: DataTypes.STRING,
        allowNull: false,
      },
    rate: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      seller_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
    
  })};

module.exports=Product;
