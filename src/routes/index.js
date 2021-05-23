const contactRouter = require("./contact");
const questionRouter = require("./question");
function route(app) {
  app.use('/contacts', contactRouter);
  app.use('/questions', questionRouter);

}
module.exports = route;
