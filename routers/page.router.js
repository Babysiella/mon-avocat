const router = require("express").Router();
router.get("/register", (req, res) => {
  res.render("register", { hasPassword: true });
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/acceuil", (req, res) => {
  res.render("acceuil");
});
router.get("/apropos", (req, res) => {
  res.render("apropos");
});
router.get("/", (req, res) => {
  res.render("acceuil");
});
router.get("/profile", (req, res) => {
  res.render("profile", { user: req.session.user, hasPassword: false });
});
module.exports = router;
