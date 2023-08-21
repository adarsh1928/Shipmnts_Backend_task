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

const userRoutes = require("./routes/routes");
app.use("/api/v1/auth", userRoutes);

app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})