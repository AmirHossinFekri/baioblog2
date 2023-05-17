import { Router } from "express";

import { getDashoard } from "../controllers/userController.js";

const temp=Router();


//?-----------GET-------------
temp.get('/',getDashoard);


//!----------POST-------------



export const userRouter=temp;