//===========================================
// IMPORT DEPENDENCIES
//===========================================
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//===========================================
// CREATE USER SCHEMA
//===========================================
const userSchema = Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "tasks"
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", userSchema);
