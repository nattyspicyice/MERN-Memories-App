import express from "express"
 
import { getPosts, createPost } from '../controllers/posts.js'
 
//Router Setup
const router = express.Router();

//Routes
router.get('/', getPosts);
router.post('/', createPost);
 
//Must export router to use & import in index.js
export default router;