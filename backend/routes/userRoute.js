const express =require("express");
const {registerUser,loginUser,logout,forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile} =require("../controllers/userController");

const {isAuthenticationUser,authorizeRoles} =require("../middleware/auth");
const router=express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenticationUser,getUserDetails);

router.route("/password/update").put(isAuthenticationUser,updatePassword);

router.route("/me/update").put(isAuthenticationUser,updateProfile);




module.exports=router;