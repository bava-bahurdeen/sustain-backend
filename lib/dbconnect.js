import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const DbConnect=async()=>{
    try{
await mongoose.connect(process.env.MONGODB)
console.log("Mongodb succesfully connected");

    }
    catch(error){
console.log(error + "not coonected");

    }
}
export default DbConnect