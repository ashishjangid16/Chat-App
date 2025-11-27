import path from "path";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";
import express from "express";

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "Backend", ".env") });

const app = express();
const server = http.createServer(app);

const allowedOrigins = [
	process.env.CLIENT_URL,
	process.env.FRONTEND_URL,
	"https://chart-app-mern-stack.onrender.com",
	"http://localhost:5173",
].filter(Boolean);

const io = new Server(server, {
	cors: {
		origin: allowedOrigins,
		methods: ["GET", "POST"],
		credentials: true,
	},
});

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => userSocketMap[receiverId];

io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;

	if (userId && userId !== "undefined") {
		userSocketMap[userId] = socket.id;
	}

	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		if (userId) {
			delete userSocketMap[userId];
		}
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };