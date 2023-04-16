import * as yup from "yup";

const schema=yup.object().shape({
    username:yup.string().required("وارد کردن نام کاربری اجباری است"),
    email:yup.string().required("وارد کردن ایمیل اجباری است").email("ایمیل را به صورت معتبر وارد کنید"),
    password:yup.string().required("وارد کردن پسورد اجباری است ").min(4 , "پسورد زیر 4 رقم به درد عمت میخوره .").max(32,"اوهه چخبره این همه کارکتر برای پسورد؟"),
    passwordConfrim:yup.string().required("وارد کردن تایید رمز عبور اجباریست").oneOf([yup.ref('password'), null], 'رمزعبورها با یکدیگر فرق دارند')
});

export const userValidation = schema;