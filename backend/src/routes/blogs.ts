import express,{Request,Response} from "express"
import { blogsData } from "../constants"

const router = express.Router()

router.get("/blogs",(req:Request,res:Response)=>{
    res.send(blogsData)
})
router.get("/blogs/:id",(req:Request,res:Response)=>{
    const paramId =parseInt(req.params.id)
    const matchedBlogs = blogsData?.filter((blog) =>blog?._id === paramId)
    if(!matchedBlogs || matchedBlogs.length === 0){
        return res
        .status(404)
        .json({message:"No blog matched this request"})
    }
    res.json(matchedBlogs)
})

export default router