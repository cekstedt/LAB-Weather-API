const express = require("express");
const https = require("https");
const HttpsProxyAgent = require("https-proxy-agent");
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", function(req, res) {
  let proxyServer = process.env.HTTPS_PROXY;
  let appid = process.env.API_KEY;
  let apiEndpoint = "api.openweathermap.org";
  let apiPath = "/data/2.5/weather?q=London,uk&units=imperial&appid=" + appid;

  let options = {
    agent: new HttpsProxyAgent(proxyServer),
    host: apiEndpoint,
    path: apiPath,
    method: "GET"
  };

  https.get(options, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      let weatherData = JSON.parse(data);
      let temp = weatherData.main.temp;
      let desc = weatherData.weather[0].description;
      let icon = weatherData.weather[0].icon;
      let imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write('<head><meta charset="utf-8"></head><body>');
      res.write("<p>The weather is currently " + desc + ".</p>");
      res.write("<h1>The temperature in London is " + temp + "° Farenheit.</h1>");
      res.write('<img src="' + imgURL + '" alt="' + desc + '">')
      res.write("</body>");
      res.send();
    });
  });
});


app.listen(port, function() {
  console.log("Server started on port " + port);
});
