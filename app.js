const express = require("express");
const https = require("https");
const HttpProxyAgent = require('http-proxy-agent');
require('dotenv').config();

const app = express();
const port = 3000;

app.get("/", function(req, res) {
  let proxyServer = process.env.HTTP_PROXY;
  let appid = process.env.API_KEY;
  let apiEndpoint = "api.openweathermap.org"
  let apiPath = "/data/2.5/weather?q=london&units=imperial&appid=" + appid;

  let options = {
    agent: new HttpProxyAgent(proxyServer),
    host: apiEndpoint,
    path: apiPath,
    method: "GET",
    headers: {
      Host: "https://" + apiEndpoint
    }
  };

  https.get(options, function(response) {
    console.log(response);
  });

  res.send("Server is up and running.");
});


app.listen(port, function() {
  console.log("Server started on port " + port);
});
