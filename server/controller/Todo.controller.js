const TodoModel = require("../models/Todo.model");

exports.firstStatus = (req, res) => {
    TodoModel.firstStatus(req.params.id, (err, todo) => {
        if (err) { res.send(err); }
        else {
            res.json({ success: true, message: "Status updated successully!" });
        }
    });
};

exports.secondStatus = (req, res) => {
    TodoModel.secondStatus(req.params.id, (err, todo) => {
        if (err) { res.send(err); }
        else {
            res.json({ success: true, message: "Status updated successully!" });
        }
    });
};

exports.thirdStatus = (req, res) => {
    TodoModel.thirdStatus(req.params.id, (err, todo) => {
        if (err) { res.send(err); }
        else {
            res.json({ success: true, message: "Status updated successully!" });
        }
    });
};

exports.fourthStatus = (req, res) => {
    TodoModel.fourthStatus(req.params.id, (err, todo) => {
        if (err) { res.send(err); }
        else {
            res.json({ success: true, message: "Status updated successully!" });
        }
    });
};


exports.getAllTodaytodoByDep = (req, res) => {
    console.log("here all today's tasks list");
    TodoModel.getAllTodaytodoByDep(req.params.id, (err, todolist) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("today's tasks", todolist);
        res.status(200).json(todolist);
    });
};
exports.getStatus = (req, res) => {
    console.log("here all today's tasks list");
    TodoModel.getStatus(req.params.id, (err, todolist) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("status :", todolist);
        res.status(200).json(todolist);
    });
};


exports.test = (req, res) => {
    console.log("here all today's tasks list");
    TodoModel.test(req.params.id, (err, todolist) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("today's tasks", todolist);
        res.status(200).json(todolist);
    });
};

exports.getAllTodaytodo = (req, res) => {
    console.log("here all today's tasks list");
    TodoModel.getAllTodaytodo((err, todolist) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("today's tasks", todolist);
        res.status(200).json(todolist);
    });
};

exports.addselectedtask = (req, res) => {
    console.log("add task to selected task");
    TodoModel.addselectedtask(req.body, (err, result) => {
        console.log("starts");
        if (err) res.send(err);
        console.log(result);
        res.status(200).json(result)
    })
}

exports.getData= (req, res) => {
    console.log("here all today's tasks list");
    TodoModel.getData(req.params.id, (err, todolist) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("status :", todolist);
        res.status(200).json(todolist);
    });
};


exports.depProgress = (req, res) => {
    console.log("here all today's tasks list");
    TodoModel.depProgress(req.params.id, (err, todolist) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("status :", todolist);
        res.status(200).json(todolist); 
    }); 
};
exports.getAllTodaytodoNotSelected = (req, res) => {
    console.log("here all today's tasks list");
    TodoModel.getAllTodaytodoNotSelected(req.params.id, (err, notselected) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("today's tasks", notselected);
        res.status(200).json(notselected);
    });
};

exports.Todolist = (req, res) => {
    console.log("here all today's tasks list");
    TodoModel.Todolist(req.params.id, (err, todolist) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("today's tasks", todolist);
        res.status(200).json(todolist);
    });
};

exports.reminder = (req, res) => {
    console.log("reminder");
    TodoModel.reminder(req.params.id, (err, todolist) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("today's tasks", todolist);
        res.status(200).json(todolist);
    });
};


exports.getdepprogress = (req, res) => {
    console.log("here all today's tasks list");
    TodoModel.getdepprogress(req.params.id, (err, todolist) => {
        console.log("We are here");
        if (err) res.send(err);
        console.log("status :", todolist);
        res.status(200).json(todolist);
    });
};
