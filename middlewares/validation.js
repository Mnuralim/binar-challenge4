import Car from "../models/carModel.js";

export const checkId = async (req, res, next, val) => {
  try {
    const car = await Car.findById(val);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
