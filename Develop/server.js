const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3000;
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(static("public"));

app.use(htmlRoutes);
app.use("/api", apiRoutes);

connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});