const express = require("express");

const todoController = require("../controllers/todos.controller");

const router = express.Router();

router.get("/", todoController.getTodos);

router.post("/", todoController.create);

router.patch("/:id", todoController.patch);

router.delete("/:id", todoController.remove);

module.exports = router;
