const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jquery = require('jquery');
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log(req);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});