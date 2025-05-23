import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    adderessLine1:{
        type:String,
        required:true,
    },
    addressLine2:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    pincode:{
        type:String,
        required:true,
    },
    specializedIn:[
       {
        Type:String,
       },
    ]

},{timestamps:true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)