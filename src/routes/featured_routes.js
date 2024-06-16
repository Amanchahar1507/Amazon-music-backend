import express from "express";
import { createFeatured, deleteFeatured, getAllFeatured, getFeatured, updateFeatured } from "../controllers/featured_controller.js";

const featuredRouter = express.Router();

featuredRouter.get("/details", getAllFeatured);
featuredRouter.get("/:id", getFeatured);
featuredRouter.post("/create", createFeatured);
featuredRouter.patch("/:id", updateFeatured);
featuredRouter.delete("/:id", deleteFeatured);

export default featuredRouter;