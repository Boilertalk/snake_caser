const express = require('express');
const bodyParser = require('body-parser');
const snakeCaseKeys = require('snakecase-keys');

// Create express app
const app = express();

// BodyParser
app.use(bodyParser.json());

// Snake Caser
app.post('/snakeCase', (req, res) => {
  const camelCased = req.body || {};

  const snakeCased = snakeCaseKeys(camelCased);

  res.status(200).json(snakeCased);
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${server.address().port}`);
});
