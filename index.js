// const { Person } = require("./person");
const dotenv = require("dotenv");

const connectToDataBase = require("./src/database/connect")

dotenv.config();

connectToDataBase();

// require("./modules/http");
// require("./modules/fs")
// require("./modules/path")
require("./modules/express")

// const person = new Person("Vitor");

