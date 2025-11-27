import path from "path";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

// Resolve __dirname for ES Modules
const __dirname = path.resolve();

// Load .env file from /Backend folder
dotenv.config({ path: path.join(__dirname, "Backend", ".env") });

// Log the loaded Mongo URI to verify .env loading
console.log("MONGO_DB_URI from env:", process.env.MONGO_DB_URI);

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Serve static frontend build
app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

connectToMongoDB();

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

