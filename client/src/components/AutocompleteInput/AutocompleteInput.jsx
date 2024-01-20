import React, { useState, useEffect } from "react";
import axios from "axios";

const AutocompleteInput = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchStations = async () => {
      const response = await axios.get("/stations");
      setSuggestions(response.data);
    };

    fetchStations();
  }, []);

  const updateSuggestions = (inputValue) => {
    setInput(inputValue);

    const filteredSuggestions = suggestions.filter((station) =>
      station.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
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
        onChange={(e) => updateSuggestions(e.target.value)}
        placeholder="Type to search for a station..."
        className="calc__item"
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() =>
                selectSuggestion(suggestion.title, suggestion.codes.esr_code)
              }
            >
              {suggestion.title} (ESR: {suggestion.codes.esr_code})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
