// import { Schema, model } from "mongoose";

// const cartSchema = new Schema({
//   customerId: { type: Schema.Types.ObjectId, ref: "customer" },
//   items: [
//     {
//       productId: { type: Schema.Types.ObjectId, ref: "product" },
//       quantity: { type: Number, required: true },
//       price: { type: Number, required: true },
//       vat: { type: Number, required: true },
//       totalPrice: { type: Number, required: true },
//     },
//   ],
// });

// const Cart = model("cart", cartSchema);
// export default Cart;

import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "product" },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  vat: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const cartSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: "customer" },
  items: [itemSchema], // Embedding itemSchema as a sub-document array
});

const Cart = model("cart", cartSchema);
export default Cart;