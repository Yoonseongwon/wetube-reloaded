import express from "express";
import { use } from "express/lib/application";
import {edit, deleteUser, see, logout} from "../controllers/userController";


const userRouter = express.Router();


userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", deleteUser);
userRouter.get(":id",see);

export default userRouter;