import mongoose, { Types } from "mongoose";
 
const productSchema = new mongoose.Schema({
    description:{
        required: true,
        Types: String
    },
    name:{
        required: true,
        types:String
    },
    price:{
        types:Number,
        default:0
    },
    stock:{
        default:0,
        types:Number,

    },
    category:{
        type:mongoose.Schema.types.objectId,
        ref:"Category"

    }
},{timestamps:true})

export const Product = mongoose.model('Product',productSchema)