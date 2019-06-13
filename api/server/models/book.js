const mongoose = require("mongoose");

var BooksSchema = mongoose.Schema({
    title: {
        type: String,
        require: [true, "title is required"]
    },
    description: {
        type: String,
        default: ""
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {tempstamps: true})

mongoose.model("Books", BooksSchema);