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
const cookieParser = require('cookie-parser');
const session = require('express-session');
const lusca = require('lusca');
app.use(cookieParser());
app.use(
  session({
    secret:
      process.env.SESSION_SECRET ||
      'a_very_strong_and_unique_secret_key_please_change_this',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 1000 * 60 * 60 * 24, // 1 day
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
