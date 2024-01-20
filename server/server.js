const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/stations", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.rasp.yandex.net/v3.0/stations_list/?apikey=bb908768-fa4c-4f93-a219-a1840e14ad09&lang=ru_RU&format=json"
    );

    const priorityCountries = [
      "Казахстан",
      "Россия",
      "Узбекистан",
      "Таджикистан",
      "Афганистан",
      "Туркменистан",
      "Кыргызстан",
    ];

    function customSort(a, b) {
      const aPriority = priorityCountries.includes(a.title)
        ? priorityCountries.indexOf(a.title)
        : priorityCountries.length;
      const bPriority = priorityCountries.includes(b.title)
        ? priorityCountries.indexOf(b.title)
        : priorityCountries.length;

      return aPriority - bPriority || a.title.localeCompare(b.title);
    }

    let sortedPriorityCountries = [];
    if (response.data && response.data.countries) {
      const filteredCountries = response.data.countries.filter((country) =>
        priorityCountries.includes(country.title)
      );

      sortedPriorityCountries = filteredCountries.sort(
        (a, b) =>
          priorityCountries.indexOf(a.title) -
          priorityCountries.indexOf(b.title)
      );
    }

    function extractStations(sortedPriorityCountries) {
      const stationsByCountry = {};

      sortedPriorityCountries.forEach((country) => {
        stationsByCountry[country.title] = [];

        country.regions.forEach((region) => {
          region.settlements.forEach((settlement) => {
            // Filter stations with station_type "station"
            const stations = settlement.stations.filter(
              (station) => station.station_type === "station"
            );

            stationsByCountry[country.title] =
              stationsByCountry[country.title].concat(stations);
          });
        });
      });

      return stationsByCountry;
    }
    const stationsSortedByCountry = extractStations(sortedPriorityCountries);

    res.json(stationsSortedByCountry);
    console.log("Stations data sorted and sent successfully.");
  } catch (error) {
    res.status(500).send("Error fetching data from Yandex API");
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
