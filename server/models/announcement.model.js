var dbConn = require("../config/db.config");


var Announcement = function (announcement) {
    this.title = announcement.title;
    this.description = announcement.description;
    
};


// get all announcements
Announcement.getAllAnnouncements = (result) => {
    dbConn.query("SELECT * FROM announcement  order by id desc  ", (err, res) => {
        if (err) {
            console.log("Error while fetching announcement", err);
            result(null, err);
        } else {
            console.log("announcement fetched successfully");
            result(null, res);
        } 
    });
};

// create new announcement
Announcement.createAnnouncement = (Data , result) => {
    dbConn.query("INSERT INTO announcement ( title , description , depname) values (?,?,?)", 
        [Data['title'], Data['description'], Data["dep"] ], (err, res) => {
        if (err) {
            console.log("Error while inserting data");
            result(null, err);
        } else {
            console.log("announcement created successfully");
            result(null, res);
        }
    });
};


module.exports = Announcement;
