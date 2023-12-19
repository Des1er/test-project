const express = require('express');
const bodyParser = require('body-parser');
const logger = require('../common/logger');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/process', (req, res) => {
  const inputNumber = req.body.number;
  const result = inputNumber * 2;
  logger.info(`M1 processed input ${inputNumber}, result: ${result}`);
  res.json({ result });
});

app.listen(port, () => {
  logger.info(`M1 service is running on port ${port}`);
});
