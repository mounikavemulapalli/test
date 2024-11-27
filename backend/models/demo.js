import mongoose from "mongoose";

const bookDemoSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  mobileCode: { type: String, default: "+91", required: true },
  babyAge: { type: String, required: true },
});

const demo = mongoose.model("BookDemo", bookDemoSchema);
export default demo;
