import mongoose from "mongoose";
 const subTodoSchema = new mongoose.Schema({
    content:{
        type:String,
        Required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }
 },{timestampes:true})

 export const SubTodo = mongoose.model("subTodo",subTodoSchema)