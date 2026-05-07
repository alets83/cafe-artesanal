const mongoose = require( 'mongoose' );

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: "name property is requited...",
        minlength: 4,
        maxlength: 35
    },
    category: {
        type: String,
        required: "category property is requited...",
        minlength: 4,
        maxlength: 35
    },
    description: {
        type: String,
        required: "description property is requited...",
        minlength: 10,
        maxlength: 180
    }
});

module.exports = mongoose.model( "Product", productSchema );