const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/api/data", async (req, res) => {
  try {
    const apiKey = "3cf54d57859f4b60a86151337232512"; // API key
    const apiUrl = "http://api.weatherapi.com/v1/current.json"; // API endpoint

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
