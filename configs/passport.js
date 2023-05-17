import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from 'bcrypt';

import { USER } from "../models/User.js";

passport.use(
    new Strategy({usernameField:"email"},async (email , password ,done)=>{
        try {
            const user = await USER.findOne({email});

            if(!user){
                return done(null , false , {massage:"کاربری با این مشخصات یافت نشد"});
            }
            const isMatch = await bcrypt.compare(password , user.password);
            if(isMatch)
                return done(null,user);
            else
                return done(null,false ,{massage:"یمیل یا رمز عبور اشتباه است"});
        } catch (err) {
            console.log(err);
        }
    })
);

passport.serializeUser((user,done)=>{
    process.nextTick(function() {
        done(null,user);
    })
});

passport.deserializeUser( (user, done) => {
   process.nextTick(()=>{
    return done(null , user);
   })
});