const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AddUser} = require('./users.controller');
const {Users}=require('../database-Sequelize/index')


const generateToken = (userId, userName) => {
  const expiresIn = 60 * 60 * 24;
  return jwt.sign({ userId, userName }, 'secretKey', { expiresIn: expiresIn });
};
const signUp = async (req, res) => {
  const { user_name, user_phOrEmail, user_password ,user_role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(user_password, 10);

    const newUser = {
      user_name,
      user_password,
      user_phOrEmail,
      user_role,
      user_img:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      user_password: hashedPassword}
     
      AddUser({ body: newUser }, res);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
};


const signIn = async(req, res) => {
  const{user_phOrEmail,user_password}=req.body;
    try {
         const result= await Users.findOne({ where :{user_phOrEmail:user_phOrEmail}})
         if(result ===null) res.send("email not found")
         else {
          const verif=result.dataValues.user_password
          const passwordMatch = await bcrypt.compare(user_password,verif)
          if(passwordMatch){
             const tok=generateToken(result.dataValues.id,result.dataValues.user_name)  
             result.dataValues.tok=tok
            res.send(result.dataValues)
          }
          else{
            res.send("password mismatch")
          }
          
      }
    
    }
    catch (error) {res.send(error)}
};

module.exports = {
  signUp,
  signIn,
};