import express from "express";
import {
  addBlog,
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  togglePublish,
  addComment,
  getBlogComments,
  generateContent,
} from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", auth, upload.single("image"), addBlog);
router.get("/all", getAllBlogs);
router.get("/:blogId", getBlogById);
router.delete("/delete-blog", auth, deleteBlogById);
router.put("/toggle-publish", auth, togglePublish);
router.post("/add-comment", addComment);
router.post("/comments", getBlogComments);
router.post("/generate-content", auth, generateContent);

export default router;
