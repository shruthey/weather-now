import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Home from "./Home/Home";
import Weather from "./Weather/Weather";

const App = () => {
  const [data, setData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

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
    if (selectedCity && currentTime) {
      const api = `http://api.weatherapi.com/v1/future.json?key=3cf54d57859f4b60a86151337232512&q=${selectedCity}&dt=${currentTime}`;

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
  }, [selectedCity, currentTime]);

  const handleCitySelection = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <Home onCitySelect={handleCitySelection} />
      {data && <Weather data={data} />}
    </div>
  );
};

export default App;
