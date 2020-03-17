const db = require('../dbConnections/mongodb');
const questionSchema = require('../schemas/questions');

const Question = db.model('questions', questionSchema);

const createQuestion = (req, res) => {
    const { title, questions } = req.body;

    console.log(title, questions);

    const newQuestion = new Question({ title: title, questions: questions });

    newQuestion.save(function (err, book) {
      if (err) return res.send('Ocorreu algum erro!');
      const response = `${title}, foi gravado com sucesso!`
      res.send(response);
    }); 
}

module.exports = createQuestion;
