import express from "express";
import { createTrendingPlaylist, deleteTrendingPlaylist, getAllTrendingPlaylist, getTrendingPlaylist, updateTrendingPlaylist } from "../controllers/trendingPlaylist_controller.js";

const trendingPlaylistRouter = express.Router();

trendingPlaylistRouter.get("/details", getAllTrendingPlaylist);
trendingPlaylistRouter.get("/:id", getTrendingPlaylist);
trendingPlaylistRouter.post("/create", createTrendingPlaylist);
trendingPlaylistRouter.patch("/:id", updateTrendingPlaylist);
trendingPlaylistRouter.delete("/:id", deleteTrendingPlaylist);

export default trendingPlaylistRouter;