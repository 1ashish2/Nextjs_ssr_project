import { productData } from "../data/productData.js";

export const getProductLists = (req, res) => {
  res.send(productData);
};

export const getProductDetail = (req, res) => {
  let id = req.params.id;
  const singleProduct = productData.filter((product) => product.id === id);
  console.log("dddRES", res);
  res.send(singleProduct);
};
export const productSearchDetail=async(req,res)=>{
  let val=req.params.id;
  const searchProduct=productData.filter((product)=>product.name.toLowerCase().split(" ").includes(val.toLowerCase()))
   res.send(searchProduct)
 
}

