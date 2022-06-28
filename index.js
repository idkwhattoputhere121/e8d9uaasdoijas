const axios = require("axios");
const fs = require("fs");
const express = require('express')
setInterval(function () {
  axios
    .get("https://MuffledLightgreenModulus.0be.repl.co/")
    .then(function (response) {
      fs.writeFile("./index.html", response.data, function (err) {
        if (err) {
          return console.log(err);
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}, 10000);



const app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
}
    , function (err) {
        console.log(err);
    }
);  
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
}
);
