let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Model = mongoose.model;

let ContactSchema = new mongoose.Schema(
    {
        firstname : String,
        lastname : String,
        address: String,
        phonenumber: String,
        email: String

    },
    {
        collection:"contacts"
    });

    module.exports.Model = Model("Contact",ContactSchema);

