import Category from "../models/categoryModel.js";


// ===== GET Routes =====
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const allCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json(error);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const categoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(404).json({success: false, error:"Category did not find"});
  }
  return res.status(200).json({success: true, data:category});
  }   
  catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const categoryName = async (req, res) => {
  try {
    const category = await Category.findOne(req.params.categoryName);

    if (!category) {
      return res.status(404).json({ success: false, error: "Category name not found" });
    }
    return res.status(200).json({ success: true, data: category });
    
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// /**
//  *
//  * @param {*} req
//  * @param {*} res
//  * @returns
//  */
// export const categoryByProduct = async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id);

//     if (!category) {
//       return res.status(404).json({ success: false, error: "Category not found" });
//     }

//     return res.status(200).json({ success: true, data: category });
//   } 
//   catch (error) {
//     return res.status(500).json({ success: false, error: error.message });
//   }
// };


// ===== POST Routes =====
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const newCategory = async (req, res) => {
  try {
    const category = await Category.create({
      categoryName: req.body.categoryName,
      imageUrl: req.body.imageUrl,
      details:req.body.details,
      discount: req.body.discount,
    });
    return res
      .status(200)
      .json({ message: "New category has been created", category });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// ===== PATCH Routes =====

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const editCategory = async (req,res)=>{
  try {
    const category = await Category.findByIdAndUpdate(req.params.id,{
      categoryName: req.body.categoryName,
      imageUrl: req.body.imageUrl,
      details:req.body.details,
      discount: req.body.discount,

    }, {new:true});
    
    if(!category){
      return res.status(404).json("Category dose n't be able to updated")
    }

    return res.status(200).json({message: "Category has been updated"})

  } catch (error) {
    return res.status(500).json(error)
  }
}


// ===== DELETE Routes =====

export const deleteCategory = async (req,res)=>{
  
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if(!category){
      return res.status(404).json({message:"Category Id could n't be found"})
    }
    return res.status(200).json({message:'Category has been deleted'})

  } catch (error) {
    return res.status(500).json(error)
  }
}



