projectData = {};

const express = require('express');

const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 8080;

//Spin up the server
const server = app.listen(port, listening);

// Callback to debug
function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};

//GET route that returns the projectData object
app.get('/all', sendData)

function sendData (request, response) {
    response.send(projectData)
}

// POST route
app.post('/addWeatherData', addData)

function addData(request, response) {
    projectData.temperature = request.body.temperature;
    projectData.date = request.body.date;
    projectData.user_response = request.body.user_response;
    response.end();
    console.log(projectData)
}