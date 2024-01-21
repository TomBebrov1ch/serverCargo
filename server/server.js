const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

const priorityCountries = [
  "Казахстан",
  "Россия",
  "Узбекистан",
  "Таджикистан",
  "Афганистан",
  "Туркменистан",
  "Кыргызстан",
];

app.get("/stations", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.rasp.yandex.net/v3.0/stations_list/?apikey=bb908768-fa4c-4f93-a219-a1840e14ad09&lang=ru_RU&format=json"
    );

    const sortedStations = extractAndSortStations(
      response.data,
      priorityCountries
    );

    res.json(sortedStations);
    console.log("Priority stations data sorted and sent successfully.");
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send("Error fetching data from Yandex API: " + error.message);
  }
});

function extractAndSortStations(data, priorityCountries) {
  const stationsByCountry = {};

  data.countries.forEach((country) => {
    if (priorityCountries.includes(country.title)) {
      stationsByCountry[country.title] = [];

      country.regions.forEach((region) => {
        region.settlements.forEach((settlement) => {
          settlement.stations.forEach((station) => {
            if (station.station_type === "train_station") {
              stationsByCountry[country.title].push({
                title: station.title,
                esr_code: station.codes.esr_code,
              });
            }
          });
        });
      });
    }
  });

  for (const countryTitle in stationsByCountry) {
    stationsByCountry[countryTitle].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return stationsByCountry;
}

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
