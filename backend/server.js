const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());

app.get("/api", (req, res) => res.json({ message: "Hello React" }));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
