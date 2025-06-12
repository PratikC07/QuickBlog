import express from "express";
import {
  adminLogin,
  getAllBlogsAdmin,
  getAllComments,
  getDashboard,
  deleteCommentById,
  approveCommentById,
} from "../controllers/adminController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", adminLogin);

router.use(auth);

router.get("/blogs", getAllBlogsAdmin);
router.get("/comments", getAllComments);
router.get("/dashboard", getDashboard);
router.delete("/delete-comment", deleteCommentById);
router.put("/approve-comment", approveCommentById);

export default router;
