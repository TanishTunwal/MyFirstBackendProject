import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connect : ${con.connection.host}`);
        

    } catch (error) {
        console.log(`ERROR : ${error.message}`);
        process.exit(1);
    }
}