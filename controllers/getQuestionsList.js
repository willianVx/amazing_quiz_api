const db = require('../dbConnections/mongodb');
const questionSchema = require('../schemas/questions');

const Question = db.model('questions', questionSchema);

const getAllQuestionInfo = () => {
	
	const filteredValue = mockedDB.map((element) => {
		const {id, questionaryTitle, permalink} = element;
		return {id: id, questionaryTitle: questionaryTitle, permalink: permalink};
	});

	return filteredValue;
} 

const getGuestionsList = async (req, res) => { 
	// res.send(getAllQuestionInfo());
	const questions = await Question.find();
	console.log(questions);
	res.send(questions);
}

module.exports = getGuestionsList;
