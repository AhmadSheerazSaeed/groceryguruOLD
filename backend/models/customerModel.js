import { Schema, model } from "mongoose";

const customerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  houseNumber: { type: String },
  streetNumber: { type: String },
  postalCode: { type: String },
  city: { type: String },
  country: { type: String },
  phoneNumber: { type: String },
  dateOfBirth: { type: String },
  creditCardNumber: { type: String },
  creditCardExpiryDate: { type: String },
  creditCardCCVNumber: { type: Number },
  details: { type: String },
  active: { type: Boolean, default: true },
});

const Customer = model('customer', customerSchema)

export default Customer;
