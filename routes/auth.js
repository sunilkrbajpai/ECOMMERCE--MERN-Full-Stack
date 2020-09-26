const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  signOut,
  requireSignIn,
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator/index");
router.post("/signup", userSignupValidator, signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);
// router.get("/hello", requireSignIn, (req, res) => {
//   res.send("hello there");
// });

module.exports = router;
