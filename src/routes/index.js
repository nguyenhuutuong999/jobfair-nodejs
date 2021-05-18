const contactRouter = require("./contact");
function route(app) {
  app.use('/contact', contactRouter);
}
module.exports = route;
