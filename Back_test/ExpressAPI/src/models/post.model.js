const mongoose = require( 'mongoose' );

const postSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: "title property is requited...",
        minlength: 4,
        maxlength: 35
    },
    content: {
        type: String,
        required: "content property is requited...",
        minlength: 10,
        maxlength: 180
    },
    date: {
        type: String,
        required: true,
        validate: {
            validator: function( v ) {
                return /^\d{4}-\d{2}-\d{2}$/.test( v );
            },
            message: props => `${ props.value } Doesn't match with Date format: YYYY-MM-DD`
        }
    },
    time: {
        type: String,
        required: true,
        validate: {
            validator: function( v ) {
                return /^\d{2}:\d{2}:\d{2}$/.test( v );
            },
            message: props => `${props.value } Doesn't match with Time format: HH:MM:SS`
        }
    },
    products: {
        type: [ String ],
        required: true,
        validate: {
            validator: function( v ) {
                return Array.isArray( v ) && v.length >= 0;
            }
        }
    }
});

module.exports = mongoose.model( "Post", postSchema );