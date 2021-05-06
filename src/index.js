const express = require("express");
const app = express();
let port = process.env.PORT || 3001;
const route = require("./routes");
const cors = require('cors')
const morgan = require('morgan');
const methodOverride = require('method-override');

app.use(cors());

app.use(morgan('combined'))
app.use(express.urlencoded({
    extended: true
  }));

app.use(express.json())
app.use(methodOverride('_method'))
route(app);

app.listen(port, () =>{
    console.log(`Example app is listening on port http://localhost:${port}`);
})