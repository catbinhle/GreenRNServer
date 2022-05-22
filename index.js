require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
// const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT || 3000

mongoose.connect('mongodb+srv://<name>:<password>@cluster0.oc8kn.mongodb.net/test');
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)

app.listen(port, () => {
    console.log(`HOSTNAME: ${process.env.HOSTNAME }`)
    console.log(`Server Started at ${port}`)
})