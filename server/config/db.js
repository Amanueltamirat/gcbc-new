import dns from 'dns';
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${mongoose.connection.host}/${mongoose.connection.name}`)
}
