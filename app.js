 // to save the data in mongodb database
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require( "body-parser" );
const port = 80;

//mongoose.connect('mongodb://localhost:27017/rana', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect('mongodb+srv://ar7fitness:Aroo7aditya@@cluster0.d2w23.mongodb.net/AR7fitness', {useNewUrlParser: true, useUnifiedTopology: true});



const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    mail: String,
    contact: String
  });
  const Contact = mongoose.model('contacts', contactSchema);


app.use(express.urlencoded())
app.use(express.static('public'))
 
app.get('/', (req, res)=>{
        res.sendFile(__dirname +'/index.html'); 
    })

app.post('/', (req, res)=> {
    var myData = new Contact(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send( "item was not saved to the databse" )
    res.sendFile(__dirname +'/index.html');
});
})

app.listen(process.env.PORT || port,()=>{
    console.log(`The application started successfully on port ${port}`);
});




