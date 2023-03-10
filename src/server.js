require("express-async-errors")
const AppError = require("./utils/AppError")
const express = require('express');
const routes = require("./routes")

const app = express();
app.use(express.json())
app.use(routes)
app.use(error, req, res, next)

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));