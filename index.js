/*
 * @Authors: Bongo.lua, IAmNotHacking
 * @Description: Monitor & Uptime keeper bot
 * @Copyright: 2022 Bongo.lua
*/

const axios = require("axios");
const fs = require("fs");
const express = require('express')

const app = express();
app.use(express.static('public'));
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

fetch();
setInterval(fetch, 10000);

function fetch() {
    axios.get(process.env.thej).then(res => {
      fs.writeFile("./public/index.html", res.data, (err) => {
        if (err) return console.error(err);
      });
    }).catch(err => {
      console.error(err);
    });
}

/*
 * @Authors Bongo.lua, IAmNotHacking
 * @Description: Monitor & Uptime keeper bot
 * @Copyright 2022 Bongo.lua
*/
