const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//===========================================
// CREATE DOCKET ITEM SCHEMA
//===========================================
const docketItemSchema = new Schema({
    task: {
        type: String
    },
    people: [
        {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    ],
    status: {
        type: Number,
        default: 0
    },
    type: {
        type: String
    },
    priority: {
        type: Number,
        default: 0
    },
    estimation: {
        type: Number,
        default: 1
    }
});

module.exports = DocketItem = mongoose.model("docketItems", docketItemSchema);
