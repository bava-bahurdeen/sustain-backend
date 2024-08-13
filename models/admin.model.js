import mongoose from "mongoose";

const Adminschema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const Admin = mongoose.model("admin",Adminschema)

export default Admin