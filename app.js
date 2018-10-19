const express = require('express');

const app = express();

//whenever a http request with the method of get to the /api route run this function, the result will be to send back a key of hi and a value of there
// run the express server using "node index.js"
// go to the url: http://localhost:3050/api
app.get('/api', (req, res) => {
  res.send({ hi: 'there' });
});

module.exports = app;
