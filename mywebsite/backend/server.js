const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// API endpoint
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

// POST example
app.post("/api/data", (req, res) => {
  const name = req.body.name;
  res.json({ reply: `Hello ${name}, data received successfully!` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

