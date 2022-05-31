const NoteModel = require("../models/note.model");

// get all note list
exports.getNoteList = (req, res) => {
    
    console.log('here all notes list');
    NoteModel.getAllNotes(req.params.id, (err, note) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("Notes", note);
        res.status(200).json(note);
    });
};
 
// create new note
exports.createNewNote = (req, res) => {
    const noteReqData = {
        title: req.body.note.title,
        details: req.body.note.details,
        dep_id: req.body.ldep
    };
    NoteModel.createNewNote(noteReqData, (err, note) => {
        if (err) res.send(err);
        res.json({
            status: true,
            message: "note Created Successfully",
            data: note
        });
    });
};

// update note
exports.updateNote = (req, res) => {
    const noteReqData = new NoteModel(req.body);
    console.log("noteReqData update", noteReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({
            success: false,
            message: "Please fill all fields",
        });
    } else {
        NoteModel.updateNote(
            req.params.id,
            noteReqData,
            (err, note) => {
                if (err) res.send(err);
                res.json({
                    status: true,
                    message: "Note updated Successfully",
                });
            }
        );
    }
};

// delete note
exports.deleteNote = (req, res) => {
    NoteModel.deleteNote(req.params.id, (err, note) => {
        if (err) res.send(err);
        res.json({ success: true, message: "Note archivedd successully!" });
    });
};
