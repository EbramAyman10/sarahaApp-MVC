import { Message } from "../../../database/models/message.model.js";
import { catchError } from "../../middleware/catchError.js";

const user = (req, res, next) => {
  let url = `${req.protocol}://${req.host}/user/${req.session.userId}`;
  res.render("user.ejs", { session: req.session, url, userId: req.params.id });
};
const sendMsg = catchError(async (req, res, next) => {
  req.body.user = req.params.id;
  let message = new Message(req.body);
  await message.save();
  res.redirect(`/user/${req.params.id}`);
});
const logout = (req, res, next) => {
  req.session.destroy(function(err) {
  res.redirect('/login')
})
};

export { user, sendMsg ,logout};
