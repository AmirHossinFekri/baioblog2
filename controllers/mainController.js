import { USER } from "../models/User.js";
//*---------GET-----------

//?---/register----
export const getRegisterPage=(req,res)=>{
    res.render("register" , {pageTitle:"ثبت نام",path:"register" });
}



//*---------POST----------

//?---/register----
export const registerHandeler=async(req,res) =>{
    
    const userValidation=USER.UserValidation(req.body);

    userValidation.then((result) => {

        console.log(result);
        res.redirect("/register")
    }).catch((err) => {
        console.log("hello");
    });

    await USER.create(req.body);
    
    res.redirect("/register");   
}