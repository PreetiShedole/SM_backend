import express from "express";
import dotenv from "dotenv";
import logger from "./middleware/logger.js";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./database/db.js";

dotenv.config();
const app = express();

app.use(logger);
app.use(express.json());

app.use("/api/smv1", userRoutes);

const PORT = process.env.PORT || 4012;

connectDB().then( () => {
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
});
