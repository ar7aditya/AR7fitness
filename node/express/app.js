         // this is for saving data in output.txt

// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const app = express();
// const port = 80;

// // EXPRESS SPECIFIC STUFF
// app.use('/static', express.static('static')) // For serving static files
// app.use(express.urlencoded())

// // PUG SPECIFIC STUFF
// app.set('view engine', 'pug') // Set the template engine as pug
// app.set('views', path.join(__dirname, 'views')) // Set the views directory
 

// // app.post('/', (req, res)=>{
// //     name = req.body.name
// //     age = req.body.age
// //     gender = req.body.gender
// //     address = req.body.address
// //     more = req.body.more
// //     let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}, contact : ${more}`
// //     fs.writeFileSync('output.txt', outputToWrite)
//     // const params = {'message': 'Your form has been submitted successfully'}
// //     res.status(200).render('index.pug', params);
// // })
// app.get('/', (req, res)=>{
//     res.status(200).render('index.pug');
//      })

// app.listen(port, ()=>{
//     console.log(`The application started successfully on port ${port}`);
// });



      //this is for saving data in mongodb database
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require( "body-parser" );
const port = 80;

mongoose.connect('mongodb://localhost:27017/rana', {useNewUrlParser: true, useUnifiedTopology: true});


const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    address: String,
    more: String
  });
  const Contact = mongoose.model('contacts', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
app.get('/', (req, res)=>{
    res.status(200).render('index.pug');
     })

app.post('/', (req, res)=> {
    var myData = new Contact(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send( "item was not saved to the databse" )
    res.status(400).render('index.pug')
});
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});




