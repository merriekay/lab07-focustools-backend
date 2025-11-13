const mongoose = require("mongoose");

// TODO: Define your Task schema here
const taskSchema = new mongoose.Schema(
  {
    // TODO: Add title field (String, required, trim)
    // TODO: Add completed field (Boolean, default false)
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
