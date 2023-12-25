import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const App = () => {
  const [data, setData] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  // Dropdown options
  const options = [
    { value: "Houston", label: "Houston" },
    { value: "Dallas", label: "Dallas" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "San Francisco", label: "San Francisco" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => {
        var futureDate = moment();
        futureDate = futureDate.add(14, "days");
        return futureDate.format("YYYY-MM-DD");
      });
    }, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const api =
      "http://api.weatherapi.com/v1/future.json?key=3cf54d57859f4b60a86151337232512&q=" +
      selectedValue +
      "&dt=" +
      currentTime;
    console.log(selectedValue);

    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [selectedValue, currentTime]);

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="dropdown">Select an item:</label>
        <select
          id="dropdown"
          value={selectedValue}
          onChange={handleDropdownChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <h1>Data from API</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default App;
