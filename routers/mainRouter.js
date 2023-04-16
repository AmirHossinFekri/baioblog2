import { Router } from "express";
import { getRegisterPage, registerHandeler } from "../controllers/mainController.js";


const temp=Router();

//?-------------GET------------------------
temp.get("/" ,(req,res)=>{
    res.render("index",{pageTitle:"تلاش دوم برای یادگیری node js"});
});

temp.get("/register" , getRegisterPage);
//?----------------------------------------

//!------------POST------------------------
temp.post("/register", registerHandeler)
//!----------------------------------------



export const mainRouter=temp;