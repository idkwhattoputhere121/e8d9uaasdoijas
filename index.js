const axios = require("axios");
const fs = require("fs");

setInterval(function () {
  axios
    .get("https://MuffledLightgreenModulus.0be.repl.co/index.html")
    .then(function (response) {
      fs.writeFile("/index.html", response.data, function (err) {
        if (err) {
          return console.log(err);
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}, 10000);
