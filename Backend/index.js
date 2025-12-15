import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import BookRoute from "./route/Book.route.js"
import userRoute from "./route/User.route.js"
import cors from "cors"
const app = express()
 app.use(cors());
 app.use(express.json())

dotenv.config();
const PORT = process.env.PORT || 4000; 
const URI = process.env.MongoDBURI;

// connect mongodb
try {
  await mongoose.connect(URI);   // no options needed in Mongoose 7+
  console.log("connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}

//routing
app.use("/Book",BookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
