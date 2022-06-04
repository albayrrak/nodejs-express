const express = require("express");
const app = express();
const Users = require("./users");

app.get("/users", (req, res) => {
    res.json(Users);
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Example app listening on port 5000!");
});
