const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors({ origin: "*" }));

let i = 0;
app.get("/", (req, res) => {
    console.log("Request: " + i++);
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
