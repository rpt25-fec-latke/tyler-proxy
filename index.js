const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const port = 3000;

app.use(express.json({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  const gameId = req.query.id;

  axios.get(`http://localhost:3001/reviews?id=${gameId}`)
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ internalServerError: err });
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
