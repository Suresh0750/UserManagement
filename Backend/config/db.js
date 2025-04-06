import mongoose from "mongoose";


const connectDB = async () => {
    try {
        // await mongoose.connect(String("mongodb+srv://suresh0750:Suresh0750@cluster0.ispgxyj.mongodb.net/usermanagement"))
        const con = await mongoose.connect(String(process.env.MONGO_URL));
        console.log('Mongo connected', con.connection.host);
    } catch (error) {
        
        console.log(`error : ${error.message}`);
        process.exit(1);
    }
}


export default connectDB