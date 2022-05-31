var dbConn = require("../config/db.config");

var Note = function (note) {
    this.title = note.title;
    this.details = note.details;

};
 
// get all notes 
Note.getAllNotes = (id,  result) => {
    console.log(id)

    dbConn.query("SELECT * FROM note where dep_id=? " ,id,(err, res) => {
        if (err) {
            console.log("Error while fetching notes", err);
            result(null, err);
        } else {
            console.log("Notes fetched successfully");
            result(null, res);
        }
    });
};


// create new note
    Note.createNewNote = (Data, result) => {
        dbConn.query("INSERT INTO note ( title , details , dep_id) values (?,?,?)",
            [Data['title'], Data['details'], Data["dep_id"]], (err, res) => {
                if (err) {
                    console.log("Error while inserting data");
                    result(null, err);
                } else {
                    console.log("note created successfully");
                    result(null, res);
                }
            });
    };


// get note by ID for update
Note.getNoteByID = (id, result) => {
    dbConn.query(" * FROM note WHERE id=?", id, (err, res) => {
        if (err) {
            console.log("Error while fetching note by id", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

// update note
Note.updateNote = (id, noteReqData, result) => {
    dbConn.query(
        "UPDATE note SET content=? WHERE id = ?",
        [
            noteReqData.content,
            id,
        ],
        (err, res) => {
            if (err) {
                console.log("Error while updating the note");
                result(null, err);
            } else {
                console.log("Note updated successfully");
                result(null, res);
            }
        }
    );
};

// delete note
Note.deleteNote = (id, result) => {
    dbConn.query("DELETE FROM note WHERE id=?", [id], (err, res) => {
        if (err) {
            console.log("Error while deleting the note");
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Note;
