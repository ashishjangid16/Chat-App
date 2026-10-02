import mongoose from "mongoose";
import dns from "node:dns";

const connectTOMongoDB = async () => {
    try {
        const dnsServers = process.env.MONGODB_DNS_SERVERS
            ?.split(",")
            .map((server) => server.trim())
            .filter(Boolean);

        if (dnsServers?.length) {
            dns.setServers(dnsServers);
        }

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