const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://rodrigo:rodrigoccufrj@cluster0-xctpe.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({ origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(routes);

// Tipos de Parâmetro
// Query Params: request.query
// Route Params: request.params
// Body: request.body

app.listen(3333);