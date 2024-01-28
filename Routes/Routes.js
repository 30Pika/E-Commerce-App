import express from "express";
import VerifyToken from "../Middleware/JWTVerifyToken.js"
import RegisterCon from "../Controller/RegisterCon.js";
import LoginCon from "../Controller/LoginCon.js";
import ProductsCon from "../Controller/ProductsCon.js";
import ProductListCon from "../Controller/ProductListCon.js";
import ProductUpdateCon from "../Controller/ProductUpdateCon.js";
import ProductDeleteCon from "../Controller/ProductDeleteCon.js";
import ProductSearchCon from "../Controller/ProductSearchCon.js";
import BuyProductCon from "../Controller/ConfirmBuyCon.js";
import BuyProductQutCon from "../Controller/BuyProductQutCon.js";

//Router Object
const router = express.Router();

//Project api Routing
//Register Route Api
router.post("/register", RegisterCon);

//Login Route Api
router.post("/login", LoginCon);

// Product Storing Api
router.post("/product", VerifyToken, ProductsCon);

//Product List Fetching Api
router.get("/product", VerifyToken, ProductListCon);

//Product List Update Api
router.put("/product/:id", VerifyToken, ProductUpdateCon);

//Product List Delete Api
router.delete("/product/:id", VerifyToken, ProductDeleteCon);

//Product List Search Api
router.get("/product/search/:key", ProductSearchCon);

//Show Product List For Buy Api
router.get("/buyproduct", ProductListCon);

//Confirm Buy Product List Api
router.post("/buyproduct", );

//Buy Product Update Quntity Api
router.put("/buyproduct/updatequt/:id", VerifyToken, BuyProductQutCon);

export default router;