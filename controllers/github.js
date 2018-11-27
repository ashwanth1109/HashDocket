//===========================================
// IMPORT DEPENDENCIES
//===========================================
const express = require("express");
const Router = express.Router();

//===========================================
// IMPORT USER MODEL
//===========================================
const User = require("../models/User");

//===========================================
// @route GET api/github/callback
//===========================================
Router.get("/callback", (req, res) => {
    const { code } = req.query;
    console.log(code);
    res.json({
        message: "Authorization Complete",
        code: code
    });
});

module.exports = Router;
