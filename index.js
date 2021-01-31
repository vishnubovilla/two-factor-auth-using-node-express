const app = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const Nexmo = require('nexmo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
nunjucks.configure('views', {express:app});

const nexmo = new Nexmo({
    apiKey : 'API-KEY-FROM-DASHBOARD',
    apiSecret : 'API-SECRET-FROM-DASHBOARD'
});

//Other code will go here