
const catchAsyncErrors = require("./catchAsyncError");
const ErrorHandler=require("../utils/errorHandler");
const jwt =require("jsonwebtoken");
const User =require("../models/userModel");

exports.isAuthenticationUser =catchAsyncErrors(async (req,res,next)=>{
    const {token} =req.cookies;

    if(!token)
    {
        return next(new ErrorHandler("Please Login to access this resource",401));
    }
    const decodeData =jwt.verify(token,process.env.JWT_SECRET);

   res.user=await User.findById(decodeData.id);

   next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};