const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema(

    {
        "id":String,
        "name": String ,
        "email": String,
        "mobile": String,
        "birthday": String,
        "university":String,
        "intern_at_least_3_months": Boolean,
        "able_to_speak_english": Boolean,
        "submited_date": String,
        "submited_total_time": Number,
        "total_correct_anwser": Number,
        "total_incorrect_anwser": Number,
        "total_anwser": Number,
    }
)

module.exports  = mongoose.model('Contact', Contact);