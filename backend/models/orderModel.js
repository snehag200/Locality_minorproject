const { Schema, model } = require('../connection');


// defining the structure of data to store
const myschema = new Schema({
    name: String,
    price : String,
    quantity : String,
    username: String,
    useraddress: String,
});

module.exports = model('order', myschema);