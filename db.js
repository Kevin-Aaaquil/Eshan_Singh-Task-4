
console.clear();

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

const chalk = require('chalk');

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

module.exports = connect();