import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User password is required"],
    },
    email: {
      type: String,
      required: [true, "User password is required"],
    },
    password: {
      type: String,
      required: [true, "User password is required"],
    },

    address: {
      type: String,
      required: [true, "User address is required"],
    },
    phone: {
      type: String,
      required: [true, "User phone is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
const User = mongoose.model("User", UserSchema);

export default User;
