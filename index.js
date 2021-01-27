const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jquery = require('jquery');
const port = 3000;

app.use(express.urlencoded({ extended: true }));

//todo: figure out how to make call to service on port 3001 from here and then manipulate response back to call here with needed data
app.get('/api', (req, res) => {
  console.log(req);
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});