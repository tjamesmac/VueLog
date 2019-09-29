const express = require('express');
const path = require('path');

const app = express();
// const PORT = process.env.PORT;
const PORT = 3000;
console.log(path.join(__dirname, '../../dist'));

app.use('/', express.static(path.join(__dirname, '../../dist')));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
