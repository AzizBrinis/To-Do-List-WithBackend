const Task = require("../models/taskSchema");
const express = require("express");
const router = express.Router();

router.get("/tasks", (req, res) => {
    Task.find()
      .then((tasks) => res.send(tasks))
      .catch((err) => res.send(err));
  });

router.post("/tasks", (req, res) => {
    const newTask = new Task({ ...req.body });
    newTask
      .save()
      .then((tasks) => res.send(tasks))
      .catch((err) => res.send(err));
  });

router.delete("/tasks/:_id", (req,res) => {
    let { _id } = req.params;
    Task.findByIdAndDelete({ _id })
        .then(() => res.send("Task has been deleted"))
        .catch((err) => res.send(err));
})

router.put("/tasks/change/:_id", (req,res) => {
    let { _id } = req.params;
    Task.findByIdAndUpdate({ _id }, { $set: { description : req.body.description } })
    .then(() => res.send("Task has been updated"))
    .catch((err) => res.send(err));
})

router.put("/tasks/done/:_id", (req,res) => {
    let { _id } = req.params;
    Task.findByIdAndUpdate({ _id }, { $set: { isDone : req.body.isDone } })
    .then(() => res.send("Task has been updated (Done)"))
    .catch((err) => res.send(err));
})


module.exports = router;