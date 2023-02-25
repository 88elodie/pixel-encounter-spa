const express = require('express');
const path = require('path');
const app = express();
const fs = require("fs");
const request = require('request');
const { PORT } = require('./config.js');
// const { API_KEY } = require('./config.js');

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

app.get("/*", function(req,res){
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));

    const url = 'https://app.pixelencounter.com/odata/basic/monsterdetails?$top=100&$orderby=Id%20desc&$skip=0';

    request.get({
        url: url,
        json: true,
        contentType: 'application/json',
        headers: {'User-Agent': 'request'}
        }, (err, res, data) => {
        if (err) {
            console.log('Error:', err);
        } else if (res.statusCode !== 200) {
            console.log('Status:', res.statusCode);
        } else {
            // data is successfully parsed as a JSON object:
            // data = Object.assign({}, data['value']);
            let newData = JSON.stringify(data['value']);
            fs.writeFile('./frontend/static/js/views/data.json', newData, err => {
                if(err) throw err;
                console.log("success");
            })
        }
    });
})

app.listen(PORT || 4001, () => console.log("Server running ...."))