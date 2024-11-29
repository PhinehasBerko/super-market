import { Router ,Request,Response} from "express";
import { highlightsProducts } from "../constants";

const router = Router();

router.get("/highlights", (req:Request, res:Response) => {
  try {
    res.send(highlightsProducts);
  } catch (error) {
    console.error(error)
  }
});

export default router;
