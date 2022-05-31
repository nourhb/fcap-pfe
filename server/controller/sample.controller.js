const SampleModel = require("../models/sample.model");

 
exports.getBuyerCountry = (req, res) => {
    console.log("here all today's tasks list");
    SampleModel.getBuyerCountry(req.params.id, (err, todolist) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("status :", todolist);
        res.status(200).json(todolist);
    });
};
exports.SoldViaPromotedListing = (req, res) => {
    console.log("here all today's tasks list");
    SampleModel.SoldViaPromotedListing(req.params.id, (err, todolist) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("status :", todolist);
        res.status(200).json(todolist);
    });
};
