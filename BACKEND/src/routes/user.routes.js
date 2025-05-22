import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { logoutUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { refreshAccessToken } from "../controllers/user.controller.js";
import { changeCurrentPassword } from "../controllers/user.controller.js";
import rateLimit from "express-rate-limit";

const router = Router();

// Rate limiter for the /register route
const registerRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // Limit each IP to 10 requests per windowMs
  message: "Too many accounts created from this IP, please try again after a minute.",
});

router.route("/register").post(registerRateLimiter, registerUser);

router.route("/login").post(loginUser);

// secured routes

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refreshtoken").post(refreshAccessToken);

router.route("/changepassword").post(changeCurrentPassword);

export default router;
