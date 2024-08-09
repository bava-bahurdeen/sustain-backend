import express from "express";
import { UserdetailIndex,Userdetail, Ticketpush } from "../controllers/user.auth.js";
const router= express.Router()


router.post('/',Userdetail)
router.get('/',UserdetailIndex)
router.post('/ticket',Ticketpush)

export default router