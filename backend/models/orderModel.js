const { Schema, model } = require('../connection');


// defining the structure of data to store
const myschema = new Schema({
    items: Array,
    totalAmt : String,
    username: String,
    useraddress: String,
});

module.exports = model('order', myschema);