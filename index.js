import express from 'express'
import DbConnect from './lib/dbconnect.js';
import dotenv from 'dotenv'
import Userroutes from "./routes/user.route.js"
import Ticektroutes from "./routes/ticket.route.js"
import Adminroutes from './routes/admin.route.js'
import cors from 'cors'
dotenv.config()

const app =express()

//database connect
DbConnect()
//Middle ware connection
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/users",Userroutes)
app.use("/ticket",Ticektroutes)
app.use("/",Adminroutes)
//server run
app.listen(process.env.PORT,()=>{
    console.log("port run on 5000");
    
})

