//===========================================
// IMPORT DEPENDENCIES
//===========================================
const express = require("express");
const Router = express.Router();

//===========================================
// IMPORT IN DOCKET ITEM MODEL
//===========================================
const DocketItem = require("../models/DocketItem");

//===========================================
// @route GET api/docket/test
// @desc Test route for docket items
// @access PUBLIC
//===========================================
Router.get("/test", (req, res) =>
    res.json({ msg: "Docket items controller works" })
);

module.exports = Router;
