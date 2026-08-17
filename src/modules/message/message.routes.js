import { Router } from "express";
import { messages } from "./message.controller.js";

let messagesRouter = Router();

messagesRouter.get("/messages", messages);

export default messagesRouter;
