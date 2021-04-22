const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const burgers_controller = require("./controllers/burgers_controller");

const app = express();
const PORT = process.env.PORT || 3306;