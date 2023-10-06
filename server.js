import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app.js";
dotenv.config();

const port = process.env.PORT || 3000;

(async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
})();

app.listen(port, () => console.log(`Server is running on port ${port}`));
