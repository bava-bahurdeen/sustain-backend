import mongoose  from "mongoose";
const TicketSchema=mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true,
       
    },
    email:{
        type:String,
        required:true,
       
    },
    place:{
        type:String,
        required:true, 
    },
    time:{
        type:String,
        required:true,  
    },
    plastic:{
        type:Number,
       
    },
    paper:{
        type:Number,
       
    },
    old_untorn_dresses:{
        type:Number,
        
    },
    decarative_materials:{
        type:Number,
       
    },

leather:{
    type:Number,
    required:true,  
},

})
const Ticket = mongoose.model("ticket",TicketSchema)
export default Ticket