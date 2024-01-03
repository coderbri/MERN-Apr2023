const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts); // READ (ALL)
    app.post("/api/product/new", ProductController.createProduct); // CREATE
    app.get("/api/product/:id", ProductController.findOneProduct); // READ (ONE)
    app.put("/api/product/update/:id", ProductController.updateProduct); // UPDATE
    app.delete("/api/product/delete/:id", ProductController.deleteProduct); // DELETE
}