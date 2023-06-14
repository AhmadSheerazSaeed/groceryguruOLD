import Category from "../models/categoryModel.js";


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const newCategory = async (req, res) => {
  try {
    const categories = await Category.create({
      categoryName: req.body.categoryName,
      imageUrl: req.body.imageUrl,
      details:req.body.details,
      discount: req.body.discount,
          });

    return res.status(200).json({message: "New category has been created" , categories})
  } catch (error) {
    return res.status(500).json({message: error.toString()})

  }
};
