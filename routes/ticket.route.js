import express from "express";
import {Ticketpush,Ticketpull} from '../controllers/ticket.auth.js'
const router=express.Router()

router.post('/',Ticketpush)
router.get('/',Ticketpull)

export default router