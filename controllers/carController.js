import Car from "../models/carModel.js";
import uploader from "../utils/cloudinary.js";

export const addNewCar = async (req, res) => {
  try {
    const { name, price, size } = req.body;
    const file = req?.file;

    const date = new Date().getTime();
    const publicId = `image${date}`;

    let imageUrl;
    if (file) {
      const uploadImage = await uploader(file.path, publicId);
      imageUrl = uploadImage.secure_url;
    }

    const newCar = await Car.create({
      name,
      price,
      size,
      image: imageUrl,
    });

    res.status(201).json({
      success: true,
      data: {
        car: newCar,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find().select("-__v");
    res.status(200).json({
      success: true,
      data: {
        cars,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id).select("-__v");
    res.status(200).json({
      success: true,
      data: {
        car,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, size } = req.body;
    const car = await Car.findById(id).select("image");

    const file = req?.file;
    const date = new Date().getTime();
    const publicId = `image${date}`;

    let urlImage;
    if (!file) {
      urlImage = car.image;
    } else {
      const uploadImage = await uploader(file.path, publicId);
      urlImage = uploadImage.secure_url;
    }

    const editCar = await Car.findByIdAndUpdate(
      id,
      {
        name,
        price,
        size,
        image: urlImage,
      },
      {
        new: true,
      }
    );
    res.status(201).json({
      success: true,
      data: {
        car: editCar,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const removeCar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCar = await Car.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      data: {
        car: null,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
