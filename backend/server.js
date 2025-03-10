const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const favoritesRouter = require("./routes/favorites");

const app = express();

// CORS configuration
const corsOptions = {
  origin: "https://bitecraft-4.onrender.com", // Frontend URL
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/favorites", favoritesRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ message: "Server error", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);