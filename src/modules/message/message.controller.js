import QRCode from "qrcode";
import { catchError } from "../../middleware/catchError.js";
import { Message } from "../../../database/models/message.model.js";

const messages = catchError(async (req, res, next) => {
  if (req.session.isLoggedIn) {
    let hosturl = `${req.protocol}://${req.host}/user/${req.session.userId}`;
    let qrcodeUrl;
    await QRCode.toDataURL(hosturl)
      .then((url) => {
        qrcodeUrl = url;
      })
      .catch((err) => {
        console.error(err);
      });

    let messages = await Message.find({ user: req.session.userId });

    res.render("messages.ejs", {
      session: req.session,
      hosturl,
      qrcodeUrl,
      messages,
    });
  } else {
    res.redirect("/login");
  }
});

export { messages };
