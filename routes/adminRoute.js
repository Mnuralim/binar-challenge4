import express from "express";
import { AllCarsPage, addNewCar, newCarPage, removeCar, updateCar, updateCarPage } from "../controllers/adminController.js";
import upload from "../middlewares/uploadFile.js";

const router = express.Router();

//for render page
router.route("/").get(AllCarsPage);
router.route("/create").get(newCarPage);
router.route("/edit/:id").get(updateCarPage);

//for action
router.route("/cars/add").post(upload, addNewCar);
router.route("/cars/update/:id").post(upload, updateCar);
router.route("/cars/delete/:id").get(removeCar);

const adminRouter = router;
export default adminRouter;
