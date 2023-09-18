import express from "express";
import bodyParser from "body-parser";


const app = express()
let port = 9000;
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

const d = new Date();
let year = d.getFullYear();


const plNames = [];


app.get("/", (req, res) => {
    res.render("index.ejs", { year: year, plNames: plNames });
  });

app.post("/submit", (req, res) => {
    const plName = req.body.notes;
    plNames.push(req.body.notes)
    console.log(plNames)
    res.render("index.ejs", { plNames: plNames, year: year });
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });