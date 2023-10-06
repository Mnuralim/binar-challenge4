import express from "express";
import morgan from "morgan";
import carRouter from "./routes/carRoute.js";
import adminRouter from "./routes/adminRoute.js";
import session from "express-session";
import flash from "connect-flash";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");
app.use(
  session({
    secret: "geeksforgeeks",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());

app.use("/api/v1/cars", carRouter);
app.use(adminRouter);

export default app;
