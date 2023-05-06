const { Router } = require("express");
const UsersController = require('../controllers/UsersController');
const usersRoutes = Router();
const usersController = new UsersController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);

module.exports = usersRoutes;
