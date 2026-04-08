import mongoose from "mongoose";

const connectTOMongoDB = async () => {
    try {
        if (!process.env.MONGO_DB_URI) {
            throw new Error("Missing MONGO_DB_URI environment variable");
        }

        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongoDB");
    } catch (error) {
        console.log("Error connecting to mongoDb", error.message);
        process.exit(1);
    }
};

export default connectTOMongoDB;