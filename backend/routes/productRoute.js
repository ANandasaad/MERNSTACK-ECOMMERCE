const express =require("express");

const {getAllProducts,createProduct, updateProduct,deleteProduct,getProductDetails}= require("../controllers/productController");
const { isAuthenticationUser, authorizeRoles } = require("../middleware/auth");

const router=express.Router();

router.route("/products").get(getAllProducts);
router.route("/admin/products/new").post(isAuthenticationUser,authorizeRoles("admin"),createProduct);
router.route("/admin/products/:id").put(isAuthenticationUser,authorizeRoles("admin"),updateProduct).delete(isAuthenticationUser,authorizeRoles("admin"),deleteProduct);

router.route("/prdouct/:id").get(getProductDetails);

module.exports=router