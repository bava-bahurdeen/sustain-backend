import Ticket from "../models/ticket.model.js";
import { errorhandler } from "../utils/error.js";

export const Ticketpush=async(req,res)=>{
    const ticket=new Ticket(req.body)   
    try {
  const newticket= await ticket.save()
  res.status(201).json(newticket+"Successfully  Ticket Raised")
  
    } catch (error) {
      console.log(error.message)
  
    }
  }

  export const Ticketpull=async(req,res)=>{
  
    try {
        const ticket=await Ticket.find()
        return res.json(ticket)
        
    } catch (error) {
    console.log(error.message);
    
      
        
        
    }
  }

    export const TicetbyId=async(req,res)=>{
      const id= req.params.id
      try {
        const ticket= Ticket.findOne({_id:new ObjectId(id)})
        res.status(200).json(ticket)
      } catch (error) {
        res.status(404).json({message:error.message})
      }
    }
