const mongoose = require( 'mongoose' );

const postSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: "El ID numérico es obligatorio",//true
        unique: true, // Para que no se repita
        min: [1, "El ID debe ser al menos 1"],
        max: [999, "El ID es demasiado grande"]
    },
    title: {
        type: String,
        required: "title property is requited...",
        minlength: 4,
        maxlength: 20
    },
    content: {
        type: String,
        required: "content property is requited...",
        minlength: 10,
        maxlength: 120
    },
     date: {
        type: String,
        required: true,
        validator: function (v){
            return/^\d{4}-\d{2}-\d{2}$/test(v)              
            }                      
    },
    time: {
        type: String,
        required: "time property is requited...",
        validator: function (v){
            return/^\d{4}-\d{2}-\d{2}$/test(v)              
            }   
        // match: [/^([01]\d|2[0-3]):([0-5]\d)$/, "El formato de hora debe ser HH:mm (24h)"]
    },
    products: {
        type: Array,
        required: "content property is requited...",       
    }
});

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: "El ID numérico es obligatorio",//true
        unique: true, // Para que no se repita
        min: [1, "El ID debe ser al menos 1"],
        max: [999, "El ID es demasiado grande"]
    },
    name: {
        type: String,
        required: "name property is requited...",
        minlength: 4,
        maxlength: 20
    },
    category: {
        type: String,
        required: "category property is requited...",
        minlength: 10,
        maxlength: 120
    },
    description: {
        type: String,
        required: "description property is requited...",
        minlength: 10,
        maxlength: 120  
   }
});

module.exports = { Post, Product };