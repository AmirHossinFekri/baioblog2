
//?-------GET---------
export const getDashoard=(req,res)=>{
    return res.render('userPages/dashboard',{pageTitle:'داشبورد'});
}



//!-------POST--------
export const logout=(req,res)=>{
    req.logout((err)=>{
        if(err)throw err;
        req.session=null;
        res.redirect('/login');
    })
}