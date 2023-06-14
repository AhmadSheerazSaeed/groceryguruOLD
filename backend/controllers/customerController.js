import Customer from "../models/customerModel.js";


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const newCustomer = async (req, res) => {
  try {
    const customers = await Customer.create({
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
    });

    return res.status(200).json({message: "New customer has been created" , customers})
  } catch (error) {
    return res.status(500).json({message: error.toString()})

  }
};
