const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const db = require("./database/db");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "config/.env",
  });
}

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.Port;

const testConnection = async () => {
  try {
    const res = await db.query("SELECT NOW()");
    console.log("Database Connected", res.rows[0]);
  } catch (error) {
    console.error("Database Connection Error", error.stack);
  }
};

testConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
