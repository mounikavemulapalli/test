import mongoose from "mongoose";

const kitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  feature: {
    type: Array,
    required: true,
  },
  months: {
    type: String,
    required: true,
  },
});

const Kit = mongoose.model("Kit", kitSchema);
export default Kit;
