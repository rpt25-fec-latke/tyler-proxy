const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const port = 3000;

app.use(express.static(path.join(__dirname, '/./public')));

app.use(cors());

app.get('/reviews', async (req, res) => {
  const id = req.query.id;

  try {
    const { data } = await axios.get(`http://204.236.178.72:3001/reviews/?id=${id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/metadata', async (req, res) => {
  const id = req.query.id;

  try {
    const { data } = await axios.get(`http://3.131.140.35:3005/metadata/?id=${id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/game_carousel_info', async (req, res) => {
  const id = req.query.id;

  try {
    const { data } = await axios.get(`http://3.137.75.100:3008/game_carousel_info/?id=${id}`);
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/morelikethis', async (req, res) => {
  const gameId = req.query.id;
  //3.137.75.100
  try {
    const { data } = await axios.get(`http://3.137.75.100:3002/morelikethis?id=${gameId}`)
    res.json(data);
  } catch(err) {
    console.log(err);
    res.status(500).send({ internalServerError: err });
  }
});

app.get('/events_and_announcements', async (req, res) => {
  const id = req.query.id;

  try {
    const { data } = await axios.get(`http://204.236.178.72:3007/events_and_announcements/?id=${id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
