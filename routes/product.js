const express = require("express");
const router = express.Router();
const {
  create,
  productById,
  read,
  remove,
  update,
} = require("../controllers/product");
const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read);
router.delete(
  "/product/:productId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  remove
);

router.put(
  "/product/:productId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  update
);
router.post("/product/create/:userId", requireSignIn, isAuth, isAdmin, create);
router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
