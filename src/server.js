import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
const logger = require('./middleware/logger');
const app = express();


dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
app.use(logger);
app.use(bodyParser.json());

//connect to mongoDB

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongoDB");

} catch (error) {
    console.log("Error:", error);
}

app.listen(PORT, () => {
    console.log(`Serve at  http"://localhost:${PORT}`);
});