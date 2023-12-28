
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  let token = req.body.tok
  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    // req.body.id = decoded.userId;
    next();
  });  
};

 const isAdmin = async (req, res, next) => {
    try {
      const role=req.body.role
      if (role === "admin") {
          return next();
        }
      return res.status(403).send({
            message: "Require Admin Role!",
          })
      }
    catch (error) {
      return res.status(500).send({
        message: "Unable to validate User role!",
      });
    }
  };

module.exports = {
  authenticateUser,
  isAdmin
};