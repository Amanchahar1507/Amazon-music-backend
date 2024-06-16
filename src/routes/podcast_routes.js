import express from "express";
import { createPodcast, deletePodcast, getAllPodcast, getPodcast, updatePodcast } from "../controllers/podcast_controller.js";

const podcastRouter = express.Router();

podcastRouter.get("/details" ,getAllPodcast);
podcastRouter.get("/:id", getPodcast);
podcastRouter.post("/create", createPodcast);
podcastRouter.patch("/:id", updatePodcast);
podcastRouter.delete("/:id", deletePodcast);

export default podcastRouter;