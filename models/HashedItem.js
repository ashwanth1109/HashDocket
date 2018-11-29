//===========================================
// IMPORT DEPENDENCIES
//===========================================
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//===========================================
// CREATE HASHED ITEM SCHEMA
//===========================================
const hashedItemSchema = new Schema({
    parentDocket: {
        type: Schema.Types.ObjectId,
        ref: "docketItems"
    },
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = HashedItem = mongoose.model("hashedItems", hashedItemSchema);
