import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  size: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://ilsto.websites.co.in/obaju-pink/img/product-placeholder.png",
    required: [true, "image is required"],
  },
  updatedAt: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

const Car = mongoose.model("Car", carSchema);
export default Car;
