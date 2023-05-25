import { Router } from "express";

import { getDashoard, logout } from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const temp=Router();


//?-----------GET-------------
temp.get('/',auth,getDashoard);

temp.get('/logout',auth,logout);
//!----------POST-------------


export const userRouter=temp;