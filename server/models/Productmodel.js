const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: {
      type: String,
      enum: ["fish", "poultry"], // Dropdown with options
      required: true,
    },
    offer: {
      type: String,
      enum: ["10%", "25%","30%"], // Dropdown with options
      required: true,
    },



    subcategory: { type: String, required: true },
    stock: { type: Number, required: true },
   
    isDisabled: { type: Boolean, default: false }, // Add this field  // Text field for fish or poultry types
  },
  
  
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
