const {Users}=require('../database-Sequelize/index')
const jwt = require('jsonwebtoken');

const AllUsers= async(req,res) => {
    try {
    const result=await Users.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const generateToken = (userId, userName) => {
    const expiresIn = 60 * 60 * 24;
    return jwt.sign({ userId, userName }, 'secretKey', { expiresIn: expiresIn });
  };


const AddUser= async(req,res) => {
    try {
    const result=await Users.create(req.body)
    const tok=generateToken(result.dataValues.id,result.dataValues.user_name)  
    result.dataValues.tok=tok
    res.send(result.dataValues)
    } catch (error) {
    res.send(error)    
    }
};

const UpdateUser= async(req,res) => {
    try {
    const result=await Users.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteUser= async(req,res) => {
    try {
    const result=await Users.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllUsers,AddUser,UpdateUser,DeleteUser}