const axios = require("axios");
const fs = require("fs");
const express = require('express')

fetchPage();
setInterval(fetchPage, 10000);

function fetchPage() {
    const URL = "https://MuffledLightgreenModulus.0be.repl.co/";
    axios.get(URL).then(res => {
        fs.writeFile("./public/index.html", res.data, err => {
            if(err) return console.error(err);
        });
    }).catch(err => {
        console.error(err);
    });
}


const app = express();
app.use(express.static('public'));
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
};
