const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "frontend/build")));
app.use(express.json());

app.get("/api", (req, res) => res.json({ message: "Hello React" }));

//===========================================
// CATCH ALL FOR ANY ROUTE THAT DOESNT EXIST
// SEND IT TO REACT'S INDEX PAGE
//===========================================
app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname + "frontend/build/index.html"))
);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
