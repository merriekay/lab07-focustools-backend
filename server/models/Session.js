const mongoose = require("mongoose");

// TODO: Define your Session schema here
const sessionSchema = new mongoose.Schema(
  {
    // TODO: Add taskId field (ObjectId, ref: 'Task', required)
    // TODO: Add duration field (Number, required, min: 1)
    // TODO: Add completed field (Boolean, default: true)
    // TODO: Add startTime field (Date, required)
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
