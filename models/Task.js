const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//===========================================
// CREATE TASK SCHEMA
//===========================================
const taskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    daysToCompletion: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    },
    taskMaster: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    assignees: [
        {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    ]
});

module.exports = Task = mongoose.model("tasks", taskSchema);
