import express from "express";
import {
  getProductLists,
  getProductDetail,
  productSearchDetail
} from "../controller/productcontroller.js";


const router = express.Router();

router.get("/productlist", getProductLists);

router.get("/productlist/:id", getProductDetail);
router.post("/productlist/:id",productSearchDetail) 

export default router;
