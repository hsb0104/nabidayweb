const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserEmailSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model('userEmails', UserEmailSchema);