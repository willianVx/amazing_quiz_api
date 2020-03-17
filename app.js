const express = require('express'); 
var cors = require('cors');
const bodyParser = require('body-parser');
const getQuestion = require('./controllers/getQuestion');
const getQuestionsList = require('./controllers/getQuestionsList');
const createQuestion = require('./controllers/createQuestion');
const app = express();

const corsOptions = {
  origin: '*',
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/question/:permalink', getQuestion);

app.get('/questionsList', getQuestionsList);

app.post('/createQuestion', createQuestion);

app.listen(8080, () => {
	console.log('app listening on port 8080!');
});
