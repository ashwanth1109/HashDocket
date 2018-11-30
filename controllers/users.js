//===========================================
// IMPORT DEPENDENCIES
//===========================================
const express = require("express");
const Router = express.Router();
const bcrypt = require("bcryptjs");

//===========================================
// IMPORT IN USER & DOCKET ITEM MODEL
//===========================================
const User = require("../models/User");
const DocketItem = require("../models/DocketItem");

//===========================================
// @route GET api/users/test
// @desc Test route for users
// @access PUBLIC
//===========================================
Router.get("/test", (req, res) => res.json({ msg: "Users route works" }));

//===========================================
// @route GET api/users/register
// @desc Register a new user
// @access PUBLIC
//===========================================
Router.post("/register", (req, res) => {
    const errors = {};
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.email = "Email already registered with application";
                return res.status(400).json(errors);
            } else {
                const newUser = new User(req.body);
                const newDocketItem = new DocketItem({
                    task: "Click to enter your task here",
                    people: [newUser._id]
                });
                newDocketItem
                    .save()
                    .then(docketItem => {
                        console.log(`docket item saved successfully in db`);
                    })
                    .catch(err => {
                        console.log(
                            `error when trying to save docket item: ${err}`
                        );
                    });
                const newDocket = {
                    name: "My First Docket",
                    items: [newDocketItem._id]
                };
                newUser.dockets.push(newDocket);
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(savedUser => {
                                res.json(savedUser);
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        })
        .catch(err => console.log(err));
});

//===========================================
// @route GET api/users/login
// @desc Log in user
// @access PUBLIC
//===========================================
Router.post("/login", (req, res) => {
    const errors = {};
    const { email, password } = req.body;
    User.findOne({ email }).then(foundUser => {
        if (foundUser) {
            bcrypt.compare(password, foundUser.password).then(isMatch => {
                if (isMatch) {
                    req.session.user = foundUser;
                    res.json({
                        user: foundUser
                    });
                } else {
                    errors.password = "Password incorrect";
                    res.status(400).json(errors);
                }
            });
        } else {
            errors.email = "User not found in database";
            res.status(404).json(errors);
        }
    });
});

//===========================================
// @route POST api/users/update/userId
// @desc Update user data
// @access PUBLIC
//===========================================
Router.put("/update/:userId", (req, res) => {
    const { userId } = req.params;
    // console.log(`User sent from body is`);
    // console.log(req.body);
    User.findByIdAndUpdate(userId, req.body)
        .then(updatedUser => {
            console.log(updatedUser);
            res.json({ message: "User updated succesfully" });
        })
        .catch(err => console.log(err));
});

module.exports = Router;
