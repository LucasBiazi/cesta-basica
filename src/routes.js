const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.post("/cadastrar", UserController.store);
routes.get("/buscar/:email", UserController.index);
routes.put("/atualizar/:id", UserController.update);
routes.delete("/apagar/:id", UserController.destroy);
routes.get("/listar", UserController.list);

module.exports = routes;