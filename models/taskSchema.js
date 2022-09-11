const mongoose = require("mongoose");
const schema = mongoose.Schema;

const task = new schema({
    description: { type: String, required: true },
    isDone: { type: Boolean, required: true },
});

module.exports = Task = mongoose.model("task", task);