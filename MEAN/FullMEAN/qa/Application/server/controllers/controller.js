var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
  createQuestion: (req, res, next) => {
    let q = new Question(req.body);
    q.save()
    .then((data) => {
      res.json(data);
      console.log(q);
    })
    .catch((err) => {
        res.status(501).json(err);
      });
  },

  findAll: (req, res, next) => {
    Question.find({})
    .then((data) => {
        console.log(data, "DB data of allquestions returning to client. in controller");
        res.json(data);
      })
      .catch((err) => {
        res.status(450).json(err);
      });
  },

  findOne: (req, res, next) => {
    Question.findOne({'_id': req.params.id})
    .then((data) =>{
      console.log(data, "DB data of question returning to client. in controller");
      res.json(data);
    })
    .catch((err) => {
      res.status(450).json(err);
    });
  },

  createAnswer: (req, res, next) => {
    let a = new Answer(req.body);
    a.save()
    .then((data) => {
      res.json(data);
      console.log(a);
    })
    .catch((err) => {
        res.status(501).json(err);
      });
  },

  findAnswer: (req, res, next) => {
    Answer.find({})
    .then((data) => {
        console.log(data, "DB data of all answers returning to client. in controller");
        res.json(data);
      })
      .catch((err) => {
        res.status(450).json(err);
      });
  }
}
