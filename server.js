//===========================================
// IMPORT DEPENDENCIES
//===========================================
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
require("dotenv").config();
const app = express();

//===========================================
// SET CONFIG FOR PORT & MONGODB
//===========================================
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

//===========================================
// CONNECT TO MONGO DB
//===========================================
mongoose
    .connect(
        MONGODB_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log(err));

//===========================================
// MIDDLEWARE
//===========================================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
//===========================================
// PASSPORT CONFIG - UNCOMMENT ONCE STRATEGY IS IMPLEMENTED
//===========================================
// require("./passport.js")(passport);

// DO YOU NEED SESSION OR PUBLIC FILES?

//===========================================
// ROUTES - TEST ROUTE
//===========================================
app.get("/", (req, res) =>
    res.send("Express is set up correctly. Test Route is working. . . ")
);

//===========================================
// APP LISTENER
//===========================================
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
