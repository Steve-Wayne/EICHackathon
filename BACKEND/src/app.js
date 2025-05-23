import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(require('lusca').csrf());

// Routes
import userRouter from "./routes/user.routes.js";
import chatbotRouter from "./routes/chatbot.routes.js";
import articlesRouter from "./routes/articles.routes.js"; // Import new articles route
import productHuntRouter from "./routes/producthunt.routes.js";
// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/chatbot", chatbotRouter);
app.use("/api/v1/articles", articlesRouter); // Add new route
app.use("/api/v1/products", productHuntRouter);
export { app };
