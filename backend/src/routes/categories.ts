import { Router, Request,Response} from "express";
import { categories, products } from "../constants";

const router = Router();

router.get("/categories", (req:Request,res:Response) =>{
    res.send(categories)
});

router.get("/categories/:id",(req:Request, res:Response) =>{
    const id = req.params.id
    try {
        const matchedProducts = products?.filter((item) =>item._base === id);
        if(!matchedProducts || matchedProducts.length === 0){
            return res.status(404).json({message:"No product matched with this category"});
        }
        res.json(matchedProducts)
    } catch (error) {
        console.error(error)
    }
})
export default router;