//clear console
console.clear();

//requiring express
const express = require('express');

//setting up an app
const app = express();

//connecting to server
const connect = require('./db');

//requiring guvirouter.js for routing CRUD cmds
const routes = require('./api/guvirouter');

//requiring chalk for text decoration
const chalk = require('chalk');

//dotenv required
const dotenv = require('dotenv');

//configuring dotenv
dotenv.config();

//setting up middleware
app.use(express.json());  //for database
app.use(express.urlencoded({       //for website
    extended: true
}));

//app using routes
app.use(routes);

try {                                                                          //express connecting and listening to http://localhost:port
    let port = process.env.PORT || 3000;
    app.listen(port || 3000, function () {
        console.log(chalk.magentaBright.bold(`listening on port ${port}`));
    });
}
catch (err) {
    console.log(err.message);
}
