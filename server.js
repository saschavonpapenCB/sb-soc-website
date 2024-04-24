const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist/sb-soc-website')));

// Proxy API requests to the backend server
app.use('/api', proxy('http://sb-soc-website.onrender.com'));

// Catch all other routes and return the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/sb-soc-website/index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});