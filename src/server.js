import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./middleware/logger.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4012;
const URI = process.env.MongoDBURI;

app.use(logger);
app.use(express.json());

app.use("/api/users", userRoutes);

// Connect to mongoDB
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
