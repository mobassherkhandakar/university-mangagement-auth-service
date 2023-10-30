import mongoose from "mongoose";
import app from "./app";
const port = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("🛢️ database connection is started");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("🛢️database connection error", error);
  }
}

main();
