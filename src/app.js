const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'img')));

app.listen(3000, () => {
  console.log(`server is listening on port ${3000}`);
});
