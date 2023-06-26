import Customer from "../models/customerModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../helpers/authorized.js";

// ===== POST Routes =====
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const createCustomer = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const customers = await Customer.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      houseNumber: req.body.houseNumber,
      streetNumber: req.body.streetNumber,
      postalCode: req.body.postalCode,
      city: req.body.city,
      country: req.body.country,
      phoneNumber: req.body.phoneNumber,
      dateOfBirth: req.body.dateOfBirth,
      creditCardNumber: req.body.creditCardNumber,
      creditCardExpiryDate: req.body.creditCardExpiryDate,
      creditCardCCVNumber: req.body.creditCardCCVNumber,
      details: req.body.details,
      active: req.body.active,
    });

    return res
      .status(200)
      .json({ message: "New customer has been created", customers });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// ===== GET Routes =====
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const allCustomer = async (req, res) => {
  try {
    const customers = await Customer.find();
    return res.status(200).json(customers);
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
export const customerById = async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    return res.status(500).json("Customer did not find");
  }
  return res.status(200).json(customer);
};


/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const customerLogin = async (req, res) => {

 try {
    const customer = await Customer.findOne({email:req.body.email}).lean();

    if (customer == null) {
      return res
        .status(404)
        .json({message: "Invalid email or password"});
    }
 
    // compare Password
    const passwordValidation = await bcrypt.compare(
      req.body.password,
      customer.password
    );

    if (passwordValidation) {
    const token = generateToken(customer);
     
    // const customerToReturn = {...customer}
    const {password, ...customerToReturn} = customer 
    return res
    .status(200) //everything went okay 
    .cookie("jwt", token, {  //ESSENTIAL cookie --> keep track of who is signed in. (storing token)
      httpOnly: true, //no scripting languages can access this cookie
      secure: false, //cookie can only be sent over https SSL/TLS, --> encrypted connection with server
      sameSite: "lax", //not allowing cookie over cross-site request (when loading images)
    })
    .json({
      message: "Login successful",
      // we are sending the user as an object with only selected keys
      customerToReturn // later I might want to send more keys here
    });
    }
    else{
      return res.status(404).json("Password not matching");

    }
  } catch (error) {
    return res.status(500).json({error: error.message });
  }
};

    
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const customerLogout = async (req, res) => {

res.clearCookie("jwt", {
  httpOnly: true,
  sameSite: 'lax',
  secure: false,
}).send("Customer logged out");

 };

 
// ===== PATCH Routes =====

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        houseNumber: req.body.houseNumber,
        streetNumber: req.body.streetNumber,
        postalCode: req.body.postalCode,
        city: req.body.city,
        country: req.body.country,
        phoneNumber: req.body.phoneNumber,
        dateOfBirth: req.body.dateOfBirth,
        creditCardNumber: req.body.creditCardNumber,
        creditCardExpiryDate: req.body.creditCardExpiryDate,
        creditCardCCVNumber: req.body.creditCardCCVNumber,
        details: req.body.details,
        active: req.body.active,
      },
      { new: true }
    );

    if (!customer) {
      return res.status(404).json("Customer dose n't be able to updated");
    }

    return res.status(200).json({ message: "Customer has been updated" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// ===== DELETE Routes =====

export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);

    if (!customer) {
      return res
        .status(404)
        .json({ message: "Customer Id could n't be found" });
    }
    return res.status(200).json({ message: "Customer has been deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
};
