const express = require('express')
const app = express()
const port = 3001

const connection = require('./database/connection');

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });


app.get('/', (req, res) => {
    connection.getData()
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});

app.get('/medication/:patientKey', (req, res) => {
    connection.getMedicationData(req.params.patientKey)
    .then(response => {
        res.json(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })