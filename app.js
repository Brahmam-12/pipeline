const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello world from Docker CI/CD pipeline!");
});

app.get('/data', (req, res) => {
  res.json({
    message: "This is a sample API response for CI/CD pipeline",
    timestamp: new Date().toISOString()
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080 for CI/CD pipeline!");
});

