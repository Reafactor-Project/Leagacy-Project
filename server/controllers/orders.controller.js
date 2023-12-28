const {orders,Users, Product}=require('../database-Sequelize/index')

const AllOrders = async(req,res) => {
    try {
    const result=await orders.findAll();
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};


const AddOrders = async(req,res) => {
    try {
    const result=await orders.create(req.body)
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const UpdateStatus = async(req,res) => {
    try {
        const result=await orders.update({send:req.body.send},{where:req.params})
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}


module.exports={AllOrders,AddOrders,UpdateStatus}