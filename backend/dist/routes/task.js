"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _task = require("../controllers/task");
var router = (0, _express.Router)();
router.get("/tasks", _task.getTasks);
router.get("/tasks/count", _task.getTasksCount);
router.get("/tasks/:id", _task.getTask);
router.post("/tasks", _task.createTask);
router["delete"]("/tasks/:id", _task.deleteTask);
router.put('/tasks/:id', _task.updateTask);
var _default = router;
exports["default"] = _default;