import express from "express";
import { globalError } from "./src/middleware/globalError.js";
import homeRouter from "./src/modules/home/home.routes.js";
import { AppError } from "./src/utils/appError.js";
import { dbConnection } from "./database/dbConnection.js";
import loginRouter from "./src/modules/login/login.routes.js";
import registerRouter from "./src/modules/register/register.routes.js";
import messagesRouter from "./src/modules/message/message.routes.js";
import userRouter from "./src/modules/user/user.routes.js";
import session from "express-session";
import cors from "cors";
import path from "path";
import mongostore from "connect-mongodb-session";
let mongoDBStore = mongostore(session);

const app = express();
const port = process.env.PORT || 3000;

let store = new mongoDBStore({
  uri: "mongodb://127.0.0.1:27017/saraha-mvc",
  collection: "mySessions",
});

app.use(cors());
app.use(
  session({
    secret: "secert session",
    resave: false,
    saveUninitialized: false,
    store,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "public")));

app.use(homeRouter);
app.use(loginRouter);
app.use(registerRouter);
app.use(messagesRouter);
app.use(userRouter);

app.use((req, res, next) => {
  next(new AppError("not found", 404));
});

app.use(globalError);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
