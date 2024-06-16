import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connect DB")
    }

    catch (error){
        console.log("error occur in connecting mongodb",error);
    }
}

export default connectDB;