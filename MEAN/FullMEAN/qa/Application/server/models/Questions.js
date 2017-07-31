var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
    question: String,
    description: String,
    user: String,
    _answer: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
});
mongoose.model('Question', QuestionSchema);
