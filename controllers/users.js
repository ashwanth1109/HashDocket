const express = require("express");
const Router = express.Router();
// const bcrupt = require('bcryptjs')

//===========================================
// @route GET api/users/test
// @desc Test route for users
// @access PUBLIC
//===========================================
Router.get("/test", (req, res) => res.json({ msg: "Users route works" }));

module.exports = Router;
