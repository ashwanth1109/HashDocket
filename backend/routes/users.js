//===========================================
// IMPORT DEPENDENCIES
//===========================================
const express = require("express");
const Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

//===========================================
// GET USER MODEL
//===========================================
const User = require("../models/User");

//===========================================
// @route GET api/users/test
// @desc Tests users route
// @access PUBLIC
//===========================================
Router.get("/test", (req, res) => res.json({ message: "Users Route works" }));

//===========================================
// @route GET api/users/test
// @desc Tests users route
// @access PUBLIC
//===========================================
Router.post("/register", (req, res) => {
    //===========================================
    // ERRORS OBJECT TO RETURN ERRORS
    //===========================================
    const errors = {};
    //===========================================
    // CHECK IF USER ALREADY EXISTS IN DB
    //===========================================
    User.findOne({ email: req.body.email }).then(user => {
        //===========================================
        // IF USER EXISTS, THEN RETURN ERROR "EMAIL ALREADY EXISTS"
        //===========================================
        if (user) {
            errors.email = "Email already exists";
            return res.status(400).json(errors); // 400 for validation errors
        } else {
            //===========================================
            // ELSE CREATE THE USER IN DB
            //===========================================
            const { name, email, password } = req.body;
            const newUser = new User({
                name: name,
                email: email,
                password: password
            });
            //===========================================
            // ENCRYPT PASSWORD USING BCRYPT BEFORE SAVING USER
            //===========================================
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            res.json(user);
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

module.exports = Router;
