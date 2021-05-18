const mongoose = require('mongoose')
async function connect() {
  try {
    await mongoose.connect("mongodb+srv://nguyenhuutuong999:Tg693571@cluster0.mge4m.mongodb.net/jobfair?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Connect successfully')
  } catch (error) {
    console.log('Connect failure !!!')
  }
}
module.exports = { connect };
