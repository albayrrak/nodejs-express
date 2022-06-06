const express = require("express");
const app = express();
const Users = require("./users");
const userRoute = require("./routes/user.routes");

app.use("/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Example app listening on port 5000!");
});
