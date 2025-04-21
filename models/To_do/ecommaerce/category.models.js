import mongoose  from "mongoose";
 const categorySchama = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
    },
    {timestamps:true}
 )

 export const Category = mongoose.model("Catwgory",categorySchama)