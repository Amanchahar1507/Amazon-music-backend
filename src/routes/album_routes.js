import express from "express";
import { createAlbum, deleteAlbum, getAllAlbum, getAlbum, updateAlbum } from "../controllers/album_Controller.js";

const albumRouter = express.Router();

albumRouter.get("/details", getAllAlbum);
albumRouter.get("/:id", getAlbum);
albumRouter.post("/create", createAlbum);
albumRouter.patch("/:id", updateAlbum);
albumRouter.delete("/:id", deleteAlbum);

export default albumRouter;