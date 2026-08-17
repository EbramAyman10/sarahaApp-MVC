
const home = (req, res, next) => {
  res.render("home.ejs",{session:req.session});
};

export { home };

