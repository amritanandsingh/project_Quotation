const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

app.use(express.urlencoded());
app.use("/", require("./routes/index"));

app.listen(port, (error) => {
    if(error) {
        console.log(`Error while running the server at port ${port}`);
        return;
    }
    console.log(`Server is up and running on port ${port}`);
})