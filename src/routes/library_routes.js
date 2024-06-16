import express from "express";
import { createLibrary, deleteLibrary, getAllLibrary, getLibrary, updateLibrary } from "../controllers/library_controller.js";

const libraryRouter = express.Router();

libraryRouter.get("/details", getAllLibrary);
libraryRouter.get("/:id", getLibrary);
libraryRouter.post("/create", createLibrary);
libraryRouter.patch("/:id", updateLibrary);
libraryRouter.delete("/:id", deleteLibrary);

export default libraryRouter;