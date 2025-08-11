import User from "../models/User.js";
import { data } from "../utils/data.js";

export const seedUser = async (req, res, next) => {
  try {
    await User.deleteMany({});
    const users = await User.insertMany(data.users);
    return res.status(201).json(users);

  } catch (err) {
    next(err);
  }
};
