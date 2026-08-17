import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = mongoose.model("User", schema);
