const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:/MessageBook-development');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"errorconnecting to db"));
db.once('open',function(){
console.log('connected to database::MongoDB');
});

module.exports=db;