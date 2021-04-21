//clear console
console.clear();

//dotenv required
const dotenv = require('dotenv');
//configuring dotenv
dotenv.config();

//requiring mongoose
const mongoose = require('mongoose');

//requiring chalk for decoration
const chalk = require('chalk');

//function connects project to the mongo database
const connect = (() => {
    try {
        mongoose.connect(
            process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        );
        console.log(chalk.magenta.bold("database connected"));
    } catch (err) {
        console.log(err.message);
    }
});

//exporting the function
module.exports = connect();