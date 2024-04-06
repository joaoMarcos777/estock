const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorizartion = require("../middlewares/verifyUserAuthorizartion");

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.use(ensureAuthenticated);

productsRoutes.get("/", productsController.index);
productsRoutes.post(
  "/",
  verifyUserAuthorizartion(["admin"]),
  productsController.create
);

module.exports = productsRoutes;
