const express = require("express");
const router = express.Router();
const { Users } = require("../users");
const { getUser } = require("../controllers/user.controllers");

router.route("/").get((req, res) => {
    res.json(Users);
});

router.route("/:id").get(getUser);

module.exports = router;
