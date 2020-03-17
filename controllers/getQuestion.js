const mockedDB = require('../mockedDB');

const getQuestionsByPermalink = (permalink) => {
	const filteredValue = mockedDB.filter(element => element.permalink === permalink);
	return filteredValue;
}

const getQuestion = (req, res) => { 
	const permalink = req.params.permalink;

	if(!permalink){
		res.status(500).send('You must have to send a permalink on the body of your request.');
		return;
	}

	res.send(getQuestionsByPermalink(permalink));
}

module.exports = getQuestion;
