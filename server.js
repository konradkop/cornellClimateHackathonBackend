import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./routes/api.js"; // <-- import default from ESM

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173", // your React dev server
  })
);
app.use(express.json());

// Use your API routes
app.use("/api", apiRoutes);

app.get("/", (req, res) => res.send("Express backend running!"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
