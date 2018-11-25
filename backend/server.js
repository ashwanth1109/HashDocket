const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/api", (req, res) => res.json({ message: "Hello React" }));

app.listen(3001, () => console.log(`listening on port 3001`));
