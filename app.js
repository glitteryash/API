const express = require("express");
const app = express();
const ejs = require("ejs");
const https = require("https");

//api key
const key = "3f0792c9b20f94bb5360360d31e3e977";

//k to cel
function KtoC(k) {
  return (k - 273.15).toFixed(2);
}

//middleware
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/:city", (req, res) => {
  let { city } = req.params;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  //get request made by node.js
  https
    .get(url, (response) => {
      console.log("statusCode:", response.statusCode);
      console.log("headers:", response.headers);

      response.on("data", (d) => {
        let djs = JSON.parse(d);
        let { temp } = djs.main;
        let newTemp = KtoC(temp);
        res.render("weather.ejs", { djs, newTemp });
      });
    })
    .on("error", (e) => {
      console.log(e);
    });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});
