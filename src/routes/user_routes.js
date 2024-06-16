import express from "express";
import { register,login, logout,deleteUser } from "../controllers/user_controllers.js";
import { authentication } from "../middlewares/user_middleware.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.delete("/:id", authentication ,deleteUser);

export default userRouter;