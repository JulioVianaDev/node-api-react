const express = require('express');
const feedRoutes = require('./routes/feed')
const bodyParser = require('body-parser')
const app = express();
// app.use(bodyParser.urlencoded());//para formulários

// GET /feed/posts
app.use(bodyParser.json())
app.use('/feed',feedRoutes);

app.listen(4000)