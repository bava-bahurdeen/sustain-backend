import express from "express";
import { UserdetailIndex,Userdetail, } from "../controllers/user.auth.js";
const router= express.Router()


router.post('/',Userdetail)
router.get('/',UserdetailIndex)


export default router