import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
    {
        username:{
            types:String,
            required:true,
            unique:true,
            lowercase:true
        },
        email:{
            types:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            types:String,
            required:true 
        }
    },
    {timestamps:true})

export const User = mongoose.model('User',userSchema)