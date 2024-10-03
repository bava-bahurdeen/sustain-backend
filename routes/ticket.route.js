import express from "express";
import {Ticketpush,Ticketpull, TicetbyId} from '../controllers/ticket.auth.js'
const router=express.Router()

router.post('/',Ticketpush)
router.get('/',Ticketpull)
router.get('/:id',TicetbyId)

export default router
