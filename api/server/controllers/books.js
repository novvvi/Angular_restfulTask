const mongoose = require('mongoose');

var Books = mongoose.model("Books");

module.exports = {
    create: (req, res) => {
        Books.create({title: req.query.title, 
            description: req.query.description, 
            completed: req.query.completed
        },
        (err) => {
            if (err){
                res.json(err);
            }
            else {
                res.redirect("/");
            }
        }) 
    },

    index: (req, res)=> {
        Books.find({}, (err, data) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
            }
        })
    },

    info: (req, res) => {
        Books.find({_id: req.query._id}, (err, data) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(data);
            }
        })
    },

    update: (req, res) => {
        Books.findOneAndUpdate({title: req.query.title}, {$set: req.query}, (err) => {
            if (err) {
                res.json(err);
            }
            else {
                res.redirect("/")
            }
        })
    },

    remove: (req, res) => {
        Books.deleteOne({_id: req.query._id}, (err) =>{
            if (err) {
                res.json(err);
            }
            else {
                res.redirect("/")
            }
        })
    }
}   