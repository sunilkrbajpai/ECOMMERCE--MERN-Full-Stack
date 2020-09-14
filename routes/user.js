const express = require("express");
const router = express.Router();
const { signUp, signIn, signOut } = require("../controllers/user");
const { userSignupValidator } = require("../validator/index");
router.post("/signup", userSignupValidator, signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);

module.exports = router;
