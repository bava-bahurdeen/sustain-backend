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
        type:String,
        required:true, 
    },
    paper:{
        type:String,
        required:true,   
    },
    old_untorn_dresses:{
        type:String,
        required:true,   
    },
    decarative_materials:{
        type:String,
        required:true,   
    },

leather:{
    type:String,
    required:true,  
},

})
const Ticket = mongoose.model("ticket",TicketSchema)
export default Ticket