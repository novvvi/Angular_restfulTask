
var Books = require("../controllers/books.js")

module.exports = (app) => {
    app.get('/movie', (req, res) => {
        Books.index(req, res);
    })
    
    app.get('/info', (req, res) => {
        Books.info(req, res);
    })

    app.post("/create", (req, res) => {
        Books.create(req,res);
    })

    app.put("/update", (req, res) => {
        console.log(req.body)
        Books.update(req, res);
    })

    app.delete("/delete/:id", (req, res) => {
        Books.remove(req, res);
    })
}