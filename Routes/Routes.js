import express from "express";
import VerifyToken from "../Middleware/JWTVerifyToken.js"
import RegisterCon from "../Controller/RegisterCon.js";
import LoginCon from "../Controller/LoginCon.js";
// import TestCon from "../Controller/TestCon.js";
// import isAdmin from "../Middleware/AdminAccess.js";

//Router Object
const router = express.Router();

//Project api Routing
//Register Route Api
router.post("/register", RegisterCon);

//Login Route Api
router.post("/login", LoginCon);

//test Route Api
router.get("/test", VerifyToken);

export default router;