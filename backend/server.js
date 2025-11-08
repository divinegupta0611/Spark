// backend/server.js
import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import mongoose from "mongoose";

const app = express();

// ✅ Enable JSON parsing for POST requests
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
}));


// Middleware
app.use("/", router);
app.use(cors());

// ✅ Connect to MongoDB (Spark database)
mongoose.connect("mongodb://127.0.0.1:27017/Spark_Dataset", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.error("MongoDB connection error:", err));


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
