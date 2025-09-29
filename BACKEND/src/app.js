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
app.use(cookieParser());
// Add express-session middleware for session management, required by lusca.csrf
// IMPORTANT: Ensure 'session' is available from 'express-session' require.
app.use(
  session({
    secret:
      process.env.SESSION_SECRET ||
      'a_very_secure_secret_key_that_you_must_change',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  }),
);
// Add lusca.csrf middleware for CSRF protection
// IMPORTANT: Ensure 'csrf' is available from 'lusca' require.
app.use(csrf());
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
