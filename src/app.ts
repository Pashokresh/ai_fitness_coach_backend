import express from "express";
import * as authRoutes from "./routes/authRouters";

// Creating Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route to register a new user
app.post("/api/auth/register", authRoutes.registerAuthRoute);

// Route to authenticate and log in a user
app.post("/api/auth/login", authRoutes.loginAuthRoute);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the AI Fitness Coach Backend!");
});

export default app;