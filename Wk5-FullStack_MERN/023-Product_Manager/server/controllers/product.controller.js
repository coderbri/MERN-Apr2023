const Product = require("../models/product.model");

module.exports = {
    // * READ (ALL)
    findAllProducts: (req, res) => {
        Product.find()
            .then((allProductData) => {
                console.log("\n === All products retrieved! ===", allProductData);
                res.json(allProductData);
            })
            .catch((err) => res.status(400).json(err));
    },
    // * CREATE
    createProduct: (req, res) => {
        Product.create( req.body )
            .then((newProduct) => {
                console.log("\n === New product added! ===", newProduct);
                res.json(newProduct);
            })
            .catch((err) => res.status(400).json(err));
    },
    // * READ (ONE)
    findOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then((singleProductData) => {
                console.log("\n === Product retrieved! ===", singleProductData);
                res.json(singleProductData);
            })
            .catch((err) => res.status(400).json(err));
    },
    // * UPDATE
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
            .then((updatedProduct) => {
                console.log("\n === Product information updated! ===", updatedProduct);
                res.json(updatedProduct);
            })
            .catch((err) => res.status(400).json(err));
    },
    // * DELETE
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json({ productStatus: result });
            })
            .catch((err) => res.status(400).json(err));
    }
}