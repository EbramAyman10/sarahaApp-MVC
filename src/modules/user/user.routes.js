import { Router } from "express";
import { sendMsg, user,logout } from "./user.controller.js";

let userRouter = Router();

userRouter.get("/user/:id", user);
userRouter.post("/sendMsg/:id", sendMsg);
userRouter.get("/logout", logout);

export default userRouter;
