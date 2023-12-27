import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Home from "./Home/Home";
import Weather from "./Weather/Weather";
import monthsData from "./monthsData";

const App = () => {
  const [data, setData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedMonths, setSelectedMonths] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTime(() => {
        return "2024-01-24";
      });
    }, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedTime && selectedCity) {
      const api = `http://api.weatherapi.com/v1/future.json?key=3cf54d57859f4b60a86151337232512&q=${selectedCity}&dt=${selectedTime}`;

      const fetchData = async () => {
        try {
          const response = await axios.get(api);
          setData(response.data);
        } catch (error) {
          console.error(
            "Error fetching data:",
            error.message || error.response?.status
          );
        }
      };

      fetchData();
    }
  }, [selectedCity, selectedTime]);

  const handleMonthSelection = (months) => {
    setSelectedMonths(months);
  };

  const onCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <Home onMonthSelect={handleMonthSelection} onCitySelect={onCitySelect} />
      {data && <Weather data={data} />}
    </div>
  );
};

export default App;
