const Todo = require("../models/todo.model");

async function getTodos(req, res, next) {
  try {
    const todos = await Todo.list();
    res.json({ todos });
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const text = req.body.text;
    const todo = new Todo(text);
    const result = await todo.create();

    res.json({ message: "create", todo: result });
  } catch (err) {
    next(err);
  }
}

async function patch(req, res, next) {
  try {
    const id = req.params.id;
    const text = req.body.text;
    const todo = new Todo(text, id);
    await todo.patch();

    res.json({ message: "patch", todo: todo });
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const id = req.params.id;
    const todo = new Todo(null, id);
    await todo.remove();

    res.json({ message: "remove" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getTodos,
  create,
  patch,
  remove,
};
