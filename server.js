// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Variable to store interval ID
let intervalId = null;

// Function to be called periodically
function periodicFunction() {
  console.log('Periodic function called');
}

// Endpoint to register the periodic function call
app.post('/register', (req, res) => {
  const interval = req.body.interval || 1000; // Default to 1 second if not provided

  // Clear any existing interval
  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  // Set up new interval
  intervalId = setInterval(periodicFunction, interval);

  res.send(`Periodic function registered with interval ${interval} ms`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});