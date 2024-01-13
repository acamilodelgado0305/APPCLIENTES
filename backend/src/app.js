const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port',process.env.PORT || 7000);

//middlewares
app.use(cors());
app.use(express.json());

//routes

app.use('/api/clients',require('./routes/clients'))
app.use('/api/contrats',require('./routes/contrats'))

module.exports=app;


