const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter product Name"],
        trim:true
    },
    description :{
        type:String,
        required:[true,"Please Enter product Description"]

    },
    price:{
        type:Number,
        required:[true,"Please Enter product Price"],
        maxLength:[8,"Price cannot exceed 8 Characters"]
    },
    rating:{
        type:Number,
        default:0
    },

    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter Product Category"],

    },
    Stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxLength:[4,"Stock cannot excced 4 Characters"],
        default:1
    },
    numOfReview:{
        type:Number,
        default:0
    },
    reviews:[{
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true
        }
    }],



    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required :true,
    },


    createAt:{
        type:Date,
        default:Date.now

    }
    

})

module.exports=mongoose.model("Product",productSchema);