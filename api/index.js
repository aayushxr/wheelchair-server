const express = require("express"); const app = express();
let value = false;
app.post("/toggle", (req, res) => {value = !value;res.send(value);});
app.get("/", (req, res) => {res.header("Access-Control-Allow-Origin", "*");res.send(value);});
app.listen(3000, () => {console.log(`Server listening at http://localhost:3000`);});