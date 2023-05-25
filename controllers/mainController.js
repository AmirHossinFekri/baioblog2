import passport from "passport";
import { USER } from "../models/User.js";
import bcrypt from "bcrypt";
//*---------GET-----------

//?---/register----
export const getRegisterPage=(req,res)=>{
    res.render("register" , {pageTitle:"ثبت نام",path:"register",errs:req.flash("error-msg")  });
}

export const getLoginPage=(req,res)=>{
    res.render("login",{pageTitle:"ورود",path:"login",msg:req.flash("succes-msg")});
}

//*---------POST----------

//?---/register----
export const registerHandeler=async(req,res) =>{
    
    const userValidation=USER.UserValidation(req.body);

    userValidation.then((result) => {

        const {username,email,password}=req.body;

        bcrypt.genSalt(10,(err,salt)=>{
            if(err) throw err;
            bcrypt.hash(password,salt,async(err,hash)=>{
                if(err)throw err;

                USER.create({
                    username,
                    email,
                    password:hash
                });
                req.flash("succes-msg","ثبت نام با موفقیت انجام شد  لطفا وارد اکانت خود شوید");
                res.redirect("/login");
            })
        });
    }).catch((err) => {
        req.flash('error-msg' , err.errors);
        res.redirect('/register');
    });    
}

//?------/login-----
export const LoginHandler=(req,res,next)=>{
    passport.authenticate("local",{
        // successRedirect:'/user',
        failureRedirect:'/login',
        failureFlash:true
    })(req,res,next)
}

export const rememberMe=(req,res)=>{

    console.log(req.body.rememberMe);
    if(req.body.rememberMe)
        {
            req.session.cookie.originalMaxAge=24*60*60*1000; //24h
        }else{
            req.session.cookie.originalMaxAge=null;
        }
    res.redirect("/user")
}
