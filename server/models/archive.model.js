var dbConn = require("../config/db.config");

var TaskArchive = function (taskarchive) {
    this.taskid=taskarchive.taskid
    this.dep = taskarchive.dep;
    this.title = taskarchive.title;
    this.instruction = taskarchive.instruction;
    this.duration=taskarchive.duration;
    this.type = taskarchive.type;
    this.status= taskarchive.status;
};

// get all task
TaskArchive.getAllTasks = (result) => {
    dbConn.query("SELECT * FROM task Where state='inactive'", (err, res) => {
        if (err) {
            console.log("Error while fetching tasks", err);
        } else {
            console.log("task fetched successfully");
            result(null, res);
        }
    });
};


TaskArchive.deleteTask = (result) => {
    dbConn.query("Delete from task WHERE state='inactive' ",  (err, res) => {
        if (err) {
            console.log("Error while deleting the task", err);
        }
        else {
            console.log("Task archive deleted successfully", res);
            
        }
    });
};


module.exports = TaskArchive;