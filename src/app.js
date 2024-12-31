const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const HttpsProxyAgent = require("https-proxy-agent");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  let proxyServer = process.env.HTTPS_PROXY_NOTREAL;
  let appid = process.env.API_KEY;
  let apiEndpoint = "api.openweathermap.org";
  let query = req.body.cityName;
  let apiPath =
    "/data/2.5/weather?q=" + query + "&units=imperial&appid=" + appid;

  let options = {
    host: apiEndpoint,
    path: apiPath,
    method: "GET"
  };

  console.log({ proxyServer: proxyServer });

  if (proxyServer) {
    options.agent = new HttpsProxyAgent(proxyServer);
  }

  https.get(options, function(response) {
    response.on("data", function(data) {
      let weatherData = JSON.parse(data);
      if (data.temp) {
        let temp = weatherData.main.temp;
        let desc = weatherData.weather[0].description;
        let icon = weatherData.weather[0].icon;
        let imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        res.write('<head><meta charset="utf-8"></head><body>');
        res.write("<p>The weather is currently " + desc + ".</p>");
        res.write(
          "<h1>The temperature in " +
            query +
            " is " +
            temp +
            "° Farenheit.</h1>"
        );
        res.write('<img src="' + imgURL + '" alt="' + desc + '">');
        res.write("</body>");
        res.send();
      } else {
        res.json(weatherData);
      }
    });
  });
});

app.listen(port, function() {
  console.log("Server started on port " + port);
});
