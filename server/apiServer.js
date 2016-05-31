const express = require('express');
const app = express();
const cors = require('cors');
const searchController = require('./controllers/searchController');

app.use(cors());

app.get('/search/:ingredient', searchController, (req, res) => {
  res.send(req.parsedData);
});

app.use((req, res, next) => {
  res.status(404).sendFile('404.html', options, err => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent:', '404.html');
    }
  });
});

app.listen(3000);
