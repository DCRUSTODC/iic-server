import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import eventsRoutes from "./routes/events.js";
import galleryRoutes from "./routes/gallery.js";

dotenv.config();
await connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is live @" + process.env.PORT);
});
app.use(express.json());
app.use("/api/event", eventsRoutes);
app.use("/api", galleryRoutes);

const PORT = process.env.PORT || 2002;

app.listen(PORT);
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
