import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose .Schema({},{timestamps:true})

export const Madicalrecord = mongoose.model("Madicalrecord",medicalRecordSchema)