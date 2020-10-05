import express, { urlencoded, json, static } from "express";
import logger from "morgan";
import { connect } from "mongoose";

import apiRoutes from "./routes/apiRoutes";
import htmlRoutes from "./routes/htmlRoutes";

const PORT = process.env.PORT || 3000;

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