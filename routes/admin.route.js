import express from "express";
import { adminSignup,adminSignin } from "../controllers/admin.auth.js";

const router =express.Router();

router.post("/signup",adminSignup)

router.get("/signup",adminSignup)
router.post("/signin",adminSignin)

export default router