const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema and Model
const guviSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },

    label: {
        type: String,
        required: [true, 'Label field is required']
    },

    price: {
        type: String,
        required: [true, 'Price field is required']
    },

    description: {
        type: String,
        required: [true, 'Description field is required']
    },

    featured: {
        type: Boolean,
        required: [true, 'Featured boolean field is required']
    }

},
    {
        collection: 'modeldb'
    });

const guvi = mongoose.model("guvimodel", guviSchema);

module.exports = guvi;

/*
* name - text
*label - text
*price - text
*description - text
*featured - true
*/

