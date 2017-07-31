var mongoose = require('mongoose');
var AnswerSchema = new mongoose.Schema({
    answer: String,
    description: String,
    user: String,
    likes: {type: Number, default: 0},
    _question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'}
});
mongoose.model('Answer', AnswerSchema);
