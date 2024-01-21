import React, { useState, useEffect } from "react";
import axios from "axios";

import "../AutocompleteInput/style.scss";

const AutocompleteInput = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [allStations, setAllStations] = useState([]); // Ensure this is always an array

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/stations");
        // Combine all station arrays into a single array
        const stationsArray = Object.values(response.data).flat();
        setAllStations(stationsArray);
      } catch (error) {
        console.error("Error fetching stations:", error);
        setAllStations([]); // Fallback to an empty array in case of error
      }
    };

    fetchStations();
  }, []);

  useEffect(() => {
    if (input && Array.isArray(allStations)) {
      const filteredSuggestions = allStations.filter((station) =>
        station.title.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [input, allStations]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const selectSuggestion = (title, esr_code) => {
    setInput(title);
    console.log(esr_code);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type to search for a station..."
        className="calc__item"
      />
      {suggestions.length > 0 && (
        <ul className="auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() =>
                selectSuggestion(suggestion.title, suggestion.esr_code)
              }
              className="auto__item"
            >
              {suggestion.title} {suggestion.esr_code}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
