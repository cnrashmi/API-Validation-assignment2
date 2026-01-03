const express = require("express");
const app = express();
const dbConnect = require("./database/db");
const routes = require("./routes/index"); 

app.use(express.json());
app.use("/", routes); 
app.listen(4400, () => console.log("Server running on 4400"));
