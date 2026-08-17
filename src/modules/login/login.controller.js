import { User } from "../../../database/models/user.model.js";
import { catchError } from "../../middleware/catchError.js";

const login = (req, res, next) => {
  res.render("login.ejs", { error: req.query.error,session:null });
};
const handleLogin = catchError(async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user || !(user.password === req.body.password))
    return res.redirect("/login?error=incorrect email or password");

  req.session.isLoggedIn = true;
  req.session.userId = user._id.toString();
  req.session.name = user.name;


    res.redirect("/messages");

});

export { handleLogin, login };
