const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const app = express();


app.get('/', (req, res) => {
  res.send('hello LOSERS')
})

app.listen(PORT, () => console.log(`up and running on port ${PORT}`));
