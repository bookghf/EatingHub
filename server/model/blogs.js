const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    id : {
        type: Number,
        required: true
    },
    
    name : {
        type: String,
        required: true
    },
    categories : {
        type: [String],
        required: true
    },
    profile_image_url : {
        type: String,
        required: true
    },
    images : {
        type: [String],
        required: true
    },
    operation_time : {
        type: [{
            day : String ,
            time_open : String ,
            time_close : String
        }],
        required: true
    },
    address : {
        type: String,
        required: true
    },
    rating : {
        type: mongoose.Types.Decimal128 ,
        required: true
    }

}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;