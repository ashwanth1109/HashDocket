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
    }
});
