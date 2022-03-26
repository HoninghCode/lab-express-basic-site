const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('Home page');
});

app.get('/about', (request, response) => {
  response.send('About page');
});

app.get('/works', (request, response) => {
  response.send('Work page');
});

app.get('/photo', (request, response) => {
  response.send('Photo page');
});

app.listen(3000);
