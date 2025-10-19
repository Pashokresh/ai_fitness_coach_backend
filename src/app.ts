import express from "express";
// import userRoutes from "./routes/users";
// import authRoutes from "./routes/auth";

const app = express();

app.use(express.json());
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

export default app;