const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

const app = express();
const PORT = process.env.PORT;


app.use('/', express.static(path.join(__dirname, '../../dist')));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
} );

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
