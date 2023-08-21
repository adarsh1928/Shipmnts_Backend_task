console.log("Starting of backend");

const express = require("express");
const app = express();

const database = require("./config/Database");

const cookieParser = require("cookie-parser");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})