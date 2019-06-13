
var Books = require("../controllers/books.js")

module.exports = (app) => {
    app.get('/task', (req, res) => {
        Books.index(req, res);
    })
    
    app.get('/', (req, res) => {
        Books.info(req, res);
    })

    app.post("/create", (req, res) => {
        Books.create(req,res);
    })

    app.put("/", (req, res) => {
        Books.update(req, res);
    })

    app.delete("/", (req, res) => {
        Books.remove(req, res);
    })
}