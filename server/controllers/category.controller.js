const {Categories,Product}=require('../database-Sequelize/index')

const AllCategory = async(req,res) => {
    try {
    const result=await Categories.findAll({
        include: Product
      });
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const OneCategory = async(req,res) => {
    try {
    const result=await Categories.findAll({
        include: {
          model: Product,
          as: 'products',
          where: {
            categoryId:req.params.id
          }
        }
      })
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AddCategory = async(req,res) => {
    try {
        console.log(req.body)
    const result=await Categories.create(req.body)
    console.log("test",result);
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteCategory= async(req,res) => {
    try {
    const result=await Categories.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { ca_name, ca_img } = req.body; // Assuming you want to update the category name and image
  
      // Check if the category with the given ID exists
      const existingCategory = await Categories.findByPk(id);
  
      if (!existingCategory) {
        return res.status(404).json({ error: 'Category not found' });
      }
  
      // Update the category with the new values
      const updatedCategory = await Categories.update(
        { ca_name, ca_img },
        { where: { id } }
      );
  
      res.json(updatedCategory);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
  
  
  





module.exports={AllCategory,OneCategory,AddCategory,DeleteCategory,updateCategory }