//===========================================
// IMPORT DEPENDENCIES
//===========================================
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
require("dotenv").config();

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
// CATCH ALL FOR ANY ROUTE THAT DOESNT EXIST
// SEND IT TO REACT'S INDEX PAGE
//===========================================
app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname + "/../client/build/index.html"))
);

//===========================================
// SET UP APP LISTENER ON PORT
//===========================================
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
