const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, ASK-BOXING BACK-END!');
});

//Use the express.static middleware to specify a directory where your images are stored. This middleware will automatically serve files from that directory.
//In the following, any requests to the /home-gallery URL path will be served from the resources/home-gallery directory.
app.use('/api/home-gallery', express.static(path.join(__dirname, 'resources', 'home-gallery')));

app.get('/api/carousel-home-images', (req, res) => {
  const imagesDirectory = path.join(__dirname, './resources/home-gallery');
  const images = fs.readdirSync(imagesDirectory);
  res.json(images);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
