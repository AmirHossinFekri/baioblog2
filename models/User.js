import mongoose from "mongoose";

import { userValidation } from "../validations/userValidation.js";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true , "وارد کردن نام کاربری اجباری است"],
        trim:true
    },
    email:{
        type:String,
        required:[true , "وارد کردن ایمیل اجباری است"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"پسورد باید وارد شود"],
        minlength:[4,"پسورد نباید کمتر از ۴ کارکتر باشد"],
        maxlengh:[224,"پسورد نباید بیشتر از ۲۲۴ کارکتر باشد."]
    },
    createAt:{
        type:Date,
        default:Date.now
    },
    uploadedAt:{
        type:Date,
        default:null
    },    
    deletedAt:{
        type:Date,
        default:null
    }

});

UserSchema.static("UserValidation", function(body) {
    return userValidation.validate(body,{abortEarly:false});
});

mongoose.set('strictQuery', true);

export const USER = mongoose.model("USER",UserSchema);