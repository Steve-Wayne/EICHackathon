import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import lusca from "lusca";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
// AI FIX START
const session = require('express-session');
const lusca = require('lusca');
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your_super_secret_key_here',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Set to true in production if using HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  }),
);
app.use(lusca.csrf());
// AI FIX END
// Routes
import articlesRouter from "./routes/articles.routes.js"; // Import new articles route
import productHuntRouter from "./routes/producthunt.routes.js";
// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/chatbot", chatbotRouter);
app.use("/api/v1/articles", articlesRouter); // Add new route
app.use("/api/v1/products", productHuntRouter);
export { app };
