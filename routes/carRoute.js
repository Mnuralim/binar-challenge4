import express from "express";
import { addNewCar, getAllCars, getCarById, removeCar, updateCar } from "../controllers/carController.js";
import upload from "../middlewares/uploadFile.js";
import { checkId } from "../middlewares/validation.js";

const router = express.Router();

router.param("id", checkId);

router.route("/").post(upload, addNewCar).get(getAllCars);
router.route("/:id").get(getCarById).patch(upload, updateCar).delete(removeCar);

const carRouter = router;
export default carRouter;
