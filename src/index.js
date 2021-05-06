const express = require("express");
const app = express();
let port = process.env.PORT || 3001;
const route = require("./routes");
const cors = require('cors')

app.use(cors());
route(app);

app.listen(port, () =>{
    console.log(`Example app is listening on port http://localhost:${port}`);
})