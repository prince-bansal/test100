const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hi from Nodejs App"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`APP IS RUNNING ON PORT ${PORT}`));
