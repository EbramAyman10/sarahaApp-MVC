import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    message: String,
    user: String
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Message = mongoose.model("Message", schema);
