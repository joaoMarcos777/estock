const { Router } = require("express");
const SalesController = require("../controllers/SalesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorizartion = require("../middlewares/verifyUserAuthorizartion");

const salesRoutes = Router();

const salesController = new SalesController();

salesRoutes.use(ensureAuthenticated);
salesRoutes.use(verifyUserAuthorizartion(["admin", "sale"]));

salesRoutes.get("/", salesController.index);

module.exports = salesRoutes;
