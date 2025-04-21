import mongoose from "mongoose"

const DoctorSchema = mongoose.Schema({
    name:{
        type:String,
        requird:true
    },
    salry:{
        type:String,
        required:true
    },
    qualifiucation:{
        type:String,
        required:true
    },
    experienceInyears:{
        type:Number,
        default:0
    },
    workInHospitels:[
        {
            type:mongoose.SchamaTypesObjectId,
            ref:"Hospital"
        }
    ]
},{timestamp:true})

export const Doctor = mongoose.model('MedicalRecord',DoctorSchema)