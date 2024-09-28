import express from "express";
import connectDB from './raw/config/db.js';
import messageRouter from "./raw/routes/MessageRoute.js";
import userRouter from "./raw/routes/UserRoute.js";
import cors from "cors";

const corsOption = {
    origin: [
        "http://20.79.181.215",
        "http://localhost:5173"
    ],
    credential: true
};

const path = '/api/v1';
const app = express();
const port = 3000;

app.use(cors(corsOption));
app.use(express.json());
app.use(path, messageRouter);
app.use(path, userRouter);

try {
    await connectDB();

    app.listen(port, () => {
        console.log("Server is running : " + port);
    });
} catch (error) {
    process.exit(1);
}