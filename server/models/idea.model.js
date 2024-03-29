var dbConn = require("../config/db.config");

var Idea = function (idea) {
    this.idea = idea.idea;
};
 
// get all ideas
Idea.getAllIdeas = (result) => {
    dbConn.query("SELECT * FROM idea", (err, res) => {
        if (err) {
            console.log("Error while fetching idea", err);
            result(null, err);
        } else {
            console.log("idea fetched successfully");
            result(null, res);
        }
    });
};


// create new Idea
Idea.createNewIdea = (Data, result) => {
        dbConn.query("INSERT INTO idea ( idea  , user_id) values (?,?)",
            [Data['idea'], Data["user_id"]], (err, res) => {
                if (err) {
                    console.log("Error while inserting data");
                    result(null, err);
                } else {
                    console.log("idea created successfully");
                    result(null, res);
                }
            });
    };


module.exports = Idea;
