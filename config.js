const dotenv = require('dotenv');
const { application } = require('express');
dotenv.config();
module.exports = {
    PORT: process.env.PORT,
    API_KEY: process.env.API_KEY
};


