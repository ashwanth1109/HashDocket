//===========================================
// IMPORT DEPENDENCIES
//===========================================
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
require("dotenv").config();
const app = express();

//===========================================
// PORT & MONGODB URI
//===========================================
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

//===========================================
// SET UP MONGO DB CONNECTION TO MLAB URI
//===========================================
mongoose
    .connect(
        MONGODB_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log(`MONGODB connection established succesfully`))
    .catch(err => console.log(err));

//===========================================
// MIDDLEWARE
//===========================================
app.use(express.static(path.join(__dirname, "/client/build"))); // Serving frontend from node server
app.use(express.urlencoded({ extended: false })); // For making url encoded postman requests while testing
app.use(express.json()); // For sending json responses for frontend client
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
);

//===========================================
// REST API ROUTES - CALLED BEFORE CATCH ALL
// ANY API ROUTE WILL BE CAUGHT FIRST TO RENDER JSON
// ALL OTHER ROUTES WILL REDIRECT TO FRONTEND INDEX PAGE
//===========================================
app.get("/api", (req, res) =>
    res.json({ message: "Hello React. Express is set up properly" })
);

//===========================================
// USER API ROUTES
//===========================================
const usersController = require("./controllers/users");
app.use("/api/users", usersController);

//===========================================
// DOCKET API ROUTES
//===========================================
const docketItemsController = require("./controllers/docketItems");
app.use("/api/docket", docketItemsController);

//===========================================
// GITHUB API ROUTE
//===========================================
const githubController = require("./controllers/github");
app.use("/api/github", githubController);

//===========================================
// CATCH ALL FOR ANY ROUTE THAT DOESNT EXIST
// SEND IT TO REACT'S INDEX PAGE
//===========================================
app.get("*", (req, res) => {
    console.log(`Entering catch all route to display index`);
    res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

//===========================================
// SET UP APP LISTENER ON PORT
//===========================================
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
