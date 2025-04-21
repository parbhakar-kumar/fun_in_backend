import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagonsedwith:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["M","F","O"]
    },
    bloodGroup:{
        type:String,

    },
    age:{
        type:Number,
    },
    admitttedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    },
},{timestamps:true})

export const Product = mongoose.model('product',productSchema)
