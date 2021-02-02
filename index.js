const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const port = 3000;

app.use(express.static(path.join(__dirname, '/./public')));

app.use(cors());

app.get('/', (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
