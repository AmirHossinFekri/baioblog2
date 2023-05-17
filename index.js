import * as dotenv from "dotenv";
import express from "express";
import flash from "connect-flash";
import session from "express-session";
import MongoConnect from "connect-mongo";

import { userRouter } from "./routers/userRouter.js";
import { mainRouter } from "./routers/mainRouter.js";
import { setStatic } from "./utils/static.js";
import { connectDB } from "./configs/db.js"

//*---adding---dotenv---File---
dotenv.config({path:"configs/.env"});

//*----setting---express----
const app=express();

//*----passport-import------
import './configs/passport.js';
import passport from "passport";

//*-------body-Parser-------
app.use(express.urlencoded({extended:false}));

//*-------session-----------
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    unset:"destroy",
    store:MongoConnect.create({mongoUrl:process.env.MONGO_DB_URL})
  }));

//*-----passport-config-----
app.use(passport.initialize());
app.use(passport.session());

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
app.use('/user',userRouter);

//*-----port---listener---
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})
