import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), "Backend", ".env")
});

console.log("PORT:", process.env.PORT);
console.log("MONGO_DB_URI:", process.env.MONGO_DB_URI);
