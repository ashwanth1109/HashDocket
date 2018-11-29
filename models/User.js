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
    dockets: [
        {
            name: {
                type: String,
                required: true
            },
            items: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "docketItems"
                }
            ]
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
    hashes: [
        {
            type: Schema.Types.ObjectId,
            ref: "hashedItems"
        }
    ]
});

module.exports = User = mongoose.model("users", userSchema);
