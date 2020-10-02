const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: 'OK',
    message: 'Request Received',
    data: req.body
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {id: 'fasdasda123131', title: 'Hello There', content: "Hai hai hai hai"},
    {id: 'fasdasda123131', title: 'Hello There', content: "Hai hai hai hai"},
    {id: 'fasdasda123131', title: 'Hello There', content: "Hai hai hai hai"},
    {id: 'fasdasda123131', title: 'Hello There', content: "Hai hai hai hai"},
    {id: 'fasdasda123131', title: 'Hello There', content: "Hai hai hai hai"}
  ];
  res.status(200).json({
    status: 'OK',
    message: 'Data retrieved successfuly',
    data: posts
  })
});

module.exports = app;
