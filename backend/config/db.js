import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://chiragprasad:chirag324@cluster0.rryclhh.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


