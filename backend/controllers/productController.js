const Product=require("../models/productModel");
const ErrorHandler=require("../utils/errorHandler");
const catchAsyncErrors= require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");






//Create Product--admin
exports.createProduct= catchAsyncErrors(async(req,res,next)=>
{
    req.body.user=req.user.id
    const product= await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    });
});


// Get ALL Product

exports.getAllProducts= catchAsyncErrors(async(req,res)=>{

    const resultPerPage=5;
    const productCount =await Product.countDocuments();



    const apiFeatures=new ApiFeatures(Product.find(),req.query).search().filter(resultPerPage);
        const products = await apiFeatures.query;
    res.status(200).json({
        success:true,
        products,
        productCount,
    })
});

//Get Product details
exports.getProductDetails=catchAsyncErrors(async(req,res,next) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next (new ErrorHandler("Product not found",404));
    }

    res.status(200).json({
        success:true,
        product,
    
    })
});

// Update Product --Admin

exports.updateProduct =catchAsyncErrors(async(req,res,next)=>
{
    let product = await Product.findById(req.params.id);
    if(!product){
        return next (new ErrorHandler("Product not found",404));
    }
    product =await Product.findByIdAndUpdate(req.params.id, res.body,{
        new :true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
        success:true,
        product
    }) 
    });

    // Delete Product

    exports.deleteProduct =catchAsyncErrors(async(req,res,next)=>{
        const product =await Product.findById(req.params.id);

        if(!product){
            return next (new ErrorHandler("Product not found",404));
        }

        await product.remove();

        res.status(200).json({
            success:true,
            message:"Product Deleted Sucessfully"
        })
    }
)

// 