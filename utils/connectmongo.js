import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config('.env');

const connectmongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log("-----------------------Mongo_connect_error--------------------");
        console.log(error);
    }
    };

export default connectmongo;