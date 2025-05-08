import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import { app, server } from "./lib/socket.js";

import { getRunTime } from "./lib/functions.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.set("json spaces", 2)

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://www.shefin.xyz",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(()=>{
    server.listen(PORT, () => {
      console.log("server is running on PORT:" + PORT);
    });
});
