const productController = require("../controllers/productConroller.js");

const router = require("express").Router();
router.post("/addProduct", productController.addProduct);
router.get("/getAllProduct", productController.getAllProducts);
router.get("/:id", productController.getOneproduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/published", productController.getPublishedProduct);

module.exports = router