const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 5000; // You can use any port that is free on your system

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with the URL~ of your frontend application
  })
);

app.get("/stations", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.rasp.yandex.net/v3.0/stations_list/?apikey=bb908768-fa4c-4f93-a219-a1840e14ad09&lang=ru_RU&format=json"
    );
    res.json(response.data);
    console.log("success");
  } catch (error) {
    res.status(500).send("Error fetching data from Yandex API");
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
