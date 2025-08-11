import createHttpError from "http-errors";
import mongoose from "mongoose";

const findWithId = async (Model, id, options = {}) => {
  try {
    const item = await Model.findById(id, options).lean();
    if (!item) {
      throw createHttpError(
        404,
        `${Model.modelName} dose not exist with this id`,
      );
    }
    return item;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      throw createHttpError(404, `Invalid ${Model.modelName} id`);
    }
    throw error;
  }
};

export default findWithId;
