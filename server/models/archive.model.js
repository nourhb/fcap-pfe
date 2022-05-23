var dbConn = require("../config/db.config");

var TaskArchive = function (taskarchive) {
    this.dep = task.dep;
    this.title = task.title;
    this.instruction = task.instruction;
    this.duration = task.duration;
    this.type = task.type;
    this.status = task.status;
};

// get all task
TaskArchive.getAllTasks = (result) => {
    dbConn.query("SELECT * FROM taskarchive where state='inactive'", (err, res) => {
        if (err) {
            console.log("Error while fetching tasks", err);
            result(null, err);
        } else {
            console.log("task fetched successfully");
            result(null, res);
        }
    });
};


TaskArchive.deleteTask = (result) => {
    dbConn.query("DELETE FROM taskarchive ", (err, res) => {
        if (err) {
            console.log("Error while deleting the task", err);
        }
        else {
            console.log("Task archive archivedd successfully", res);

        }
    });
};

module.exports = TaskArchive;
