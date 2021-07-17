const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rana', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
// });

const kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function () {
    const greeting = this.name   
    console.log(greeting);
  }
  
  const Kitten = mongoose.model('adirana', kittySchema);

  const ram = new Kitten({ name: 'adirana' });
  console.log(ram.name); 

 ram.save(function (err, ram) {
    if (err) return console.error(err);
    ram.speak();
  });

