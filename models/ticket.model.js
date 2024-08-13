import mongoose  from "mongoose";

const TicketSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
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
        required:true, 
    },
    paper:{
        type:Number,
        required:true,   
    },
    old_untorn_dresses:{
        type:Number,
        required:true,   
    },
    decarative_materials:{
        type:Number,
        required:true,   
    },

leather:{
    type:Number,
    required:true,  
},

})
const Ticket = mongoose.model("ticket",TicketSchema)
export default Ticket