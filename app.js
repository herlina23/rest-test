const express = require("express");

const app = express();

//Environtment Variables
require("dotenv").config();

//Connect to Database
require("./config/db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Please use /api/v1/musics");
});

app.use("/api/v1/musics", require("./routes/musics"));

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`Server started on Port ${PORT}`));
