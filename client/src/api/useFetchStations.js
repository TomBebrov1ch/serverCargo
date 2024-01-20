import { useState } from "react";
import axios from "axios";

function useFetchCity() {
  const [cities, setCities] = useState();
  const [error, setError] = useState(null);

  const fetchCity = async () => {
    try {
      const response = await axios.get("http://localhost:5000/stations");
      setCities(response.data);
      console.log("success ЕБАТЬ ТУ ЛЮСЮ", response.data);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setError("Request limit reached. Please try again later.");
      } else {
        setError("An error occurred.");
      }
      console.error("Error:", error.message, error);
    }
  };

  return { fetchCity, cities, error };
}

export default useFetchCity;
