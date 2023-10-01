import express from "express";
const router = express.Router();
import {
  deleteImage,
  getImage,
  postImage,
  updateImage,
} from "../controllers/gallery.js";
router.route("/gallery").get(getImage);
router.route("/gallery").post(postImage);
router.route("/gallery/:id").put(updateImage);
router.route("/gallery/:id").delete(deleteImage);
export default router;

