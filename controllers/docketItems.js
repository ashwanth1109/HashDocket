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

//===========================================
// @route POST api/docket/new
// @desc Create a new docket
// @access PUBLIC
//===========================================
Router.post("/new", (req, res) => {
    const newDocket = new DocketItem();
    newDocket
        .save()
        .then(savedDocket => {
            res.json({
                message: "Docket has been saved",
                docketId: savedDocket._id
            });
        })
        .catch(err => console.log(err));
});

//===========================================
// @route GET api/docket/:docketId
// @desc Get a docket
// @access PUBLIC
//===========================================
// Router.get('/:docketId', (req,res)=>{
//     const {docketId} = req.params
//     console.log(docketId);
//     DocketItem.findById(id)
// })

module.exports = Router;
