const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [ true, "Product Name is required"],
        minLength: [ 3, "Product Name must be 3 or more characters" ],
        maxLength: [ 128, "Product Name is too long" ]
    },
    productPrice: {
        type: Number,
        required: [ true, "Product Price is required"],
        min: [ 0.99, "Product Price must be at least $1" ]
    },
    productDescription: {
        type: String,
        required: [ true, "Product Description is required"],
        minLength: [ 3, "Product Description must be 3 or more characters" ],
        maxLength: [ 300, "Product Description is too long" ]
    }
}, {timestamps:true});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;