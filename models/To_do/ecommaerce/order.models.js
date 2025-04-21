import mongoose from "mongoose";

   const orderItemSchma = new mongoose.Schema({
    productId:{
        type:mongoose.SchemaTypes.Type.ObjectId,
        ref:"Produch"
    },
    quantity:{
        tyoe:Number,
        required:true
    }

   })

const oderSchema = new mongoose.Schema(
    {
        oderPrice:{
            type:Number,
            requird:true
        },
        customar:{
            type:mongoose.SchemaTypes.Types.objecjId,
            ref:"User"
        },
        orderItem:{
            type:[orderItemSchma],

        },
        address:{
            type:String,
            requird:true
        },
        status:{
            type:String,
            enum:["PENDING","CANELLED","DELIEVERD"],
            default:"PENDING"
        }

    },{timesTamps:true}
)

export const Oder = mongoose.model("Oder",oderSchema)