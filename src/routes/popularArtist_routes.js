import express from "express";
import { createPopularArtist, deletePopularArtist, getAllPopularArtist, getPopularArtist, updatePopularArtist } from "../controllers/popularArtist_controller.js";

const popularArtistRouter = express.Router();

popularArtistRouter.get("/details", getAllPopularArtist);
popularArtistRouter.get("/:id", getPopularArtist);
popularArtistRouter.post("/create", createPopularArtist);
popularArtistRouter.patch("/:id", updatePopularArtist);
popularArtistRouter.delete("/:id", deletePopularArtist);

export default popularArtistRouter;