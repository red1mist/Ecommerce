const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter the name of the product"]
    },
    description:{
        type:String,
        required:[true, "Please enter the product description"]
    },
    price:{
        type: Number,
        required:[true, "Please enter the price of the product"],
        maxlength:[8, "Price can't exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true, "Please enter product category"]

    },
    stock:{
        type:Number,
        required:[true, "Please enter the number of products in stock"],
        maxlength:[4, "Products in stock can't exced 4 characters"],
        default: 1
    },
    numberOfReviews:{
        type: Number,
        default:0,
    },
    reviews:[
        {
            name:{
                type: String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);