import { User } from "../../../database/models/user.model.js";
import { catchError } from "../../middleware/catchError.js";

const register = (req, res, next) => {
  res.render("register.ejs", { error: req.query.error,session:null });
};

const handleRegister = catchError(async (req, res, next) => {
  let isExist = await User.findOne({ email: req.body.email });
  console.log(isExist);
  
  if (isExist) return res.redirect("/register?error=email already exists");

  let user = new User(req.body);
  await user.save();

  res.redirect("/login");
});

export { register, handleRegister };
