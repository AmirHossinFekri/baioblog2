import * as dotenv from "dotenv";
import express from "express";
import flash from "connect-flash"

import { mainRouter } from "./routers/mainRouter.js";
import { setStatic } from "./utils/static.js";
import { connectDB } from "./configs/db.js"

//*---adding---dotenv---File---
dotenv.config({path:"configs/.env"});

//*----setting---express----
const app=express();

//*-------body-Parser-------
app.use(express.urlencoded({extended:false}));

//*-------flash-------------
app.use(flash());

//*---connect-to-database---
connectDB();

//*-------set-static--------
setStatic(app);

//*---------views-----------
app.set('view engine', 'ejs');
app.set("views","views");

//*-------routers-----------
app.use(mainRouter);

//*-----port---listener---
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})
