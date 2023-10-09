import Car from "../models/carModel.js";
import uploader from "../utils/cloudinary.js";
import formatDate from "../utils/formateDate.js";

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
      updatedAt: formatDate(),
      createdAt: formatDate(),
    });

    req.flash("message", "Ditambah");
    res.redirect("/");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const newCarPage = async (req, res) => {
  try {
    res.render("create.ejs");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const AllCarsPage = async (req, res) => {
  try {
    const { category, search } = req.query;

    const searchCriteria = {};

    if (category) {
      searchCriteria.size = category;
    }

    if (search) {
      searchCriteria.name = { $regex: ".*" + search + ".*", $options: "i" };
    }

    const cars = await Car.find(searchCriteria).select("-__v").sort("name");

    res.render("index.ejs", {
      cars,
      message: req.flash("message", ""),
      fullUrl: category ? `http://localhost:3000/?category=${category}` : "http://localhost:3000/",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateCarPage = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id).select("-__v");
    res.render("edit.ejs", {
      car,
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

    await Car.findByIdAndUpdate(
      id,
      {
        name,
        price,
        size,
        image: urlImage,
        updatedAt: formatDate(),
      },
      {
        new: true,
      }
    );

    req.flash("message", "Data berhasil di update");
    res.redirect("/");
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

    req.flash("message", "Data berhasil dihapus");
    res.redirect("/");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
