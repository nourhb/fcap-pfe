const IdeaModel = require("../models/idea.model");

// get all idea list
exports.getIdeaList = (req, res) => {
    console.log('here all ideas list');
    IdeaModel.getAllIdeas((err, ideas) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("Ideas", ideas);
        res.status(200).json(ideas);
    });
};

// create new Idea

exports.createNewIdea = (req, res) => {
    const ideaReqData = {
        idea: req.body.newidea.idea,
        user_id: req.body.userid
    };
    IdeaModel.createNewIdea(ideaReqData, (err, idea) => {
        if (err) res.send(err);
        res.json({
            status: true,
            message: "idea Created Successfully",
            data: idea
        });
    });
};
