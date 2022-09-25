const https = require("https");
const url =
  "http://api.weatherstack.com/current?access_key=7ec5f21651729003021daa55de8dc16e&query=37.8267,-122.4233";

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
