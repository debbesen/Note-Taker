let db = require("../db/db.json");

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(db)
    });

    app.post("/api/notes", function({body}, res){
        if(db){
            db.push(body)
            res.json(true)
            console.log(body);
        }
    });

};

    