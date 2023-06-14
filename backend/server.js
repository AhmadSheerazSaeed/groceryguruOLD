import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log(`Database ${process.env.DB_NAME} connected`);
  })
  .catch((error) => {
    console.log(error.toString());
  });
