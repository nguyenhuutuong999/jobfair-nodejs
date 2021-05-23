const Question = require('./../models/Question');

class QuestionController{
    index(req, res, next){
        Question.find({})
        .then((questions) => res.json(questions))
        .catch(next);
    }

    create(req, res, next){
        let payload = req.body;
        payload = {
            text : payload.text,
            type : payload.type,
            anwsers : payload.anwsers.map(answer =>{
                    answer._id = new Date().getTime().toString(36) + Math.random().toString(36).slice(2);
                    return answer;
            })
        }
        Question.create(payload)
        .then(() => {
            res.status(200)
            res.json({message: "Ok"})
        })
        .catch(next)
    }
    
}
module.exports = new QuestionController();