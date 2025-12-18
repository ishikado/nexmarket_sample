import mongoose from "mongoose"

const connectDB = async() => {
  try {
    // project HOME に .env.local をおいて、そこで MONGODBURL を定義する想定
    await mongoose.connect(process.env.MONGODBURL)
    console.log("Success: Connected to MongoDB")
  } catch {
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()
  }
}

export default connectDB
