import { Router ,Response,Request} from "express";
import { products } from "../constants";

const router = Router();

router.get("/products", (req:Request, res:Response) => {
  try {
    res.send(products);
  } catch (error) {
    console.error(error)
  }
});

router.get("/products/:id", (req:Request, res:Response) => {
  try {
    const productId = parseInt(req.params.id);
  const product = products.find((item) => item._id === productId);

  if (!productId) {
    return res.status(404).json({ message: "Single Phone was not found" });
  }
  res.send(product);
  } catch (error) {
    console.error(error)
  }
});

export default router;
