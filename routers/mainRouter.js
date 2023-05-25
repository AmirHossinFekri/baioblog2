import { Router } from "express";
import { LoginHandler, getLoginPage, getRegisterPage, registerHandeler, rememberMe } from "../controllers/mainController.js";


const temp=Router();

//?-------------GET------------------------
//* Route : /
temp.get("/" ,(req,res)=>{
    res.render("index",{pageTitle:"تلاش دوم برای یادگیری node js"});
});

//* Route : /register
temp.get("/register" , getRegisterPage);

//* Route : /login
temp.get("/login",getLoginPage);
//?----------------------------------------

//!------------POST------------------------
//* Route: /register 
temp.post("/register", registerHandeler);

//* Route: /login
temp.post("/login",LoginHandler,rememberMe);
//!----------------------------------------



export const mainRouter=temp;