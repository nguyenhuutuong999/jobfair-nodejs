
const siteRouter = require("./site");
const paymentRouter = require("./payment");
function route(app) {
  app.use('/payment', paymentRouter)
  app.use('/', siteRouter);


}
module.exports = route;
