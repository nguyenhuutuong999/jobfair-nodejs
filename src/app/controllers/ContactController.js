
const Contact = require("../models/Contact");
class ContactController {
  index(req, res, next) {
    Contact.find({"email": req.body.email} || {"mobile":  req.body.mobile})
    .then((courses) =>{
      if(courses.length !== 0){
        res.status(400)
        res.json({message: "Email or Mobile is exist !!!"})
      }else{
        res.status(200)
        res.json({message: "Ok"})
      }
    })
    .catch(next);
  }

  ranking(req, res, next) {
    const query = Contact.find();
    query.sort({ total_correct_anwser: 'desc', submited_total_time: 1 })
    .then(courses =>res.json(courses))
    .catch(next);
  }

  result(req, res, next) {
    console.log(req.params)
    Contact.findById(req.params.id)
    .then(contact => {
      //console.log(contact)
      res.json(contact)}
    )
    .catch(next);
  }
  
  
}
module.exports = new ContactController();
