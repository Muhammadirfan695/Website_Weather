const express = require('express');
const path =require('path');
const hbs =require('hbs');
const app = express();
const port = process.env.PORT || 3000;

// public static path
// console.log(path.join(__dirname, "../public")) //consol for path check

const static_path = (path.join(__dirname, "./public"));
const template_path = (path.join(__dirname, "./templates/views"));
const partials_path = (path.join(__dirname, "./templates/partials"));

// hbs path view
app.set('view engine', 'hbs')
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("/", (req, res)=>{
    // for html
    // res.send("Wellcome to Irfan technichal channel")
    // for hbs  
    res.render("index");
})

app.get("/about", (req, res)=>{
    // res.send("Wellcome to About Page Channel");
   
    res.render("about");
})

app.get("/Weather", (req, res)=>{
    // for html
    // res.send("Well to Weather App Write Now")
    // for hbs
    res.render("weather")
}) 

app.get("*", (req, res) => {
    res.render('404error', {
    // keyvalue pair or property
    errorMsg: 'Opps! 404 page not Found'
    });
   
})

app.listen(port, () =>{
    console.log(`listening to the port at ${port}`)
})

