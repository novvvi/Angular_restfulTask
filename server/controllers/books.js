const mongoose = require('mongoose');

var Books = mongoose.model("Books");

module.exports = {
    create: (req, res) => {
        console.log(req);
        Books.create({title: req.body.title, 
            description: req.body.description, 
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
        console.log(req.body);
        Books.findOneAndUpdate({title: req.body.title}, req.body, {new: true}, (err) => {
            if (err) {
                res.json(err);
            }
            else {
                res.redirect("/")
            }
        })
    },

    remove: (req, res) => {
        Books.deleteOne({_id: req.params.id}, (err) =>{
            if (err) {
                res.json(err);
            }
            else {
                res.redirect("/")
            }
        })
    }
}   