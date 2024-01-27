import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(morgan('dev'));

const PORT = process.env.PORT;
const MODE = process.env.DEV_MODE;
const Mongo_URL = process.env.Mongo_URL;

import ConnectDB from "./Config/DB.js";
ConnectDB(Mongo_URL);

//All Project Routes
import Routes from "./Routes/Routes.js"

//Routes
app.use("/E-Commerce/api", Routes);

app.listen(PORT, () =>
    console.log(`Sever Start... Project 'Security Boat' ${MODE} Mode On Port No. ${PORT};`));