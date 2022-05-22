var dbConn = require("../config/db.config");
var moment = require('moment');

var Todo = function (task) {
    this.dep = task.dep;
    this.title = task.title;
    this.instruction = task.instruction;
    this.duration = task.duration;
    this.type = task.type;
    this.updated_at = task.updated_at;
    this.status = task.status;
    id;
};


//get all task
Todo.getAllTodaytodoByDep = (dep, result) => { //data = req.body

    dbConn.query("SELECT * FROM task where date_frame=current_date() and dep=? ", [dep], (err, res) => {
        if (err) {
            console.log("Error while fetching tasks", err);
            result(null, err);
        } else {
            console.log("task fetched successfully");
            result(null, res);
        }
    });
};

Todo.getStatus = (id, result) => { //data = req.body

    dbConn.query("SELECT status FROM selectedtask where taskid=?", [id], (err, res) => {
        if (err) {
            console.log("Error while fetching tasks", err);
            result(null, err);
        } else {
            console.log("task fetched successfully");
            result(null, res);
        }
    });
};

Todo.addselectedtask = (data, result) => {
    const { taskid, dep, userid } = data; 

    const time = moment().format('YYYY-MM-DD , hh:mm:ss');
    dbConn.query("INSERT INTO selectedtask (taskid,dep_id,user_id,added_at,status) VALUES (?,?,?,?,?)",
        [taskid, dep, userid, time, ["0"]], (err, res) => {

            if (err) {
                console.log("Error while inserting data", err);
                result(null, err);
            } else {
                console.log("task id inserted  successfully");
                result(null, res);
            }
        });
};


Todo.firstStatus = (id, result) => {
    dbConn.query("UPDATE selectedtask SET status = 1 ,count = 0 ,  last_check = current_time ,first_check=current_time WHERE taskid=? ", [id], (err, res) => {
        if (err) {
            console.log("Error while update status", err);
            result(null, err);
        } else {
            dbConn.query("UPDATE task SET status = 1 WHERE taskid=? ", [id]);

            result(null, res);
            console.log(" update status", res);

        }

    });
}

Todo.secondStatus = (id, result) => {
            dbConn.query("SELECT * FROM selectedtask where taskid=?", [id], (err, res) => {
                let last_check = res[0][`last_check`];
                let first_check = res[0][`first_check`];
                let exe_duration = res[0][`execution_duration`];

                let now = moment().format("HH:mm:ss");
                let real_time = soustractTimes(now, first_check);
                let execution = soustractTimes(now, last_check);
                let execution_duration = addTimes(execution, exe_duration);
                console.log(execution_duration, 'and', execution, 'and', real_time)
                if (err) {
                    console.log("Error while fetching tasks", err);
                    result(null, err);
                } else {
                    dbConn.query("UPDATE selectedtask SET status =2 ,count=1 ,	execution_duration=?  WHERE taskid=?", [real_time, execution_duration, id], (err, res) => {
                        if (err) {
                            console.log("Error while update status", err);
                            result(null, err);
                        } else {
                            result(null, res);
                            console.log(" update status");

                        }

                    });
                    console.log("task done successfully");
                }
            });

        }
    

Todo.thirdStatus = (id, result) => {
    dbConn.query("UPDATE selectedtask SET status = 2, count=(count+1) , last_check = current_time  WHERE taskid=?", [id], (err, res) => {
        if (err) {
            console.log("Error while update status", err);
            result(null, err);
        } else {
            result(null, res);
            console.log(" update status", res);

        }

    });
}
function addTimes(startTime, endTime) {
    var times = [0, 0, 0]
    var max = times.length

    var a = (startTime || '').split(':');
    var b = (endTime || '').split(':');

    // normalize time values
    for (var i = 0; i < max; i++) {
        a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
        b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i])
    }

    for (var i = 0; i < max; i++) {
        times[i] = a[i] + b[i]
    }

    var hours = times[0]
    var minutes = times[1]
    var seconds = times[2]
    var days = 0

    if (hours >= 24) {
        var d = (hours / 24) << 0
        days += d

        hours -= 24 * d
    }

    if (seconds >= 60) {
        var m = (seconds / 60) << 0
        minutes += m
        seconds -= 60 * m
    }

    if (minutes >= 60) {
        var h = (minutes / 60) << 0
        hours += h
        minutes -= 60 * h
    }
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
}
function soustractimes(startTime, endTime) {
    var times = [0, 0, 0]
    var max = times.length

    var a = (startTime || '').split(':');
    var b = (endTime || '').split(':');

    // normalize time values
    for (var i = 0; i < max; i++) {
        a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
        b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i])
    }

    for (var i = 0; i < max; i++) {
        times[i] = a[i] + b[i]
    }

    var hours = times[0]
    var minutes = times[1]
    var seconds = times[2]
    var days = 0

    if (hours >= 24) {
        var d = (hours / 24) << 0
        days += d

        hours -= 24 * d
    }

    if (seconds >= 60) {
        var m = (seconds / 60) << 0
        minutes += m
        seconds -= 60 * m
    }

    if (minutes >= 60) {
        var h = (minutes / 60) << 0
        hours += h
        minutes -= 60 * h
    }
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
}

function soustractTimes(startTime, endTime) {
    var times = [0, 0, 0]
    var max = times.length

    var a = (startTime || '').split(':');
    var b = (endTime || '').split(':');

    // normalize time values
    for (var i = 0; i < max; i++) {
        a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
        b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i])
    }

    for (var i = 0; i < max; i++) {
        times[i] = a[i] - b[i]
    }

    var hours = times[0]
    var minutes = times[1]
    var seconds = times[2]
    var days = 0

    if (hours >= 24) {
        var d = (hours / 24) << 0
        days += d

        hours -= 24 * d
    }

    if (seconds >= 60) {
        var m = (seconds / 60) << 0
        minutes += m
        seconds -= 60 * m
    }

    if (minutes >= 60) {
        var h = (minutes / 60) << 0
        hours += h
        minutes -= 60 * h
    }
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
}

Todo.fourthStatus = (id, result) => {
    dbConn.query("SELECT * FROM selectedtask where taskid=?", [id], (err, res) => {
        let last_check = res[0][`last_check`];
        let first_check = res[0][`first_check`];
        let exe_duration = res[0][`execution_duration`];
        let pauseT = res[0][`pause_duration`];
        let estimated_time = res[0][`estimated_time`];
       


        let now = moment().format("HH:mm:ss");
        let real_time = soustractTimes(now, first_check);
        let execution = soustractTimes(now, last_check);
        let execution_duration = addTimes(execution , exe_duration);
        let pause = soustractTimes(real_time, execution_duration);
        let pause_duration = addTimes(pauseT,pause);
        let wasted_time= soustractTimes(estimated_time, execution_duration);


        console.log(execution_duration ,'and',execution,'and', real_time  )
        if (err) {
            console.log("Error while fetching tasks", err);
            result(null, err);
        } else {
            dbConn.query("UPDATE selectedtask SET status =3 ,real_time=?, 	execution_duration=? ,last_check=current_time, pause_duration=? , wasted_time=?   WHERE taskid=?", [real_time, execution_duration, pause_duration, wasted_time,id], (err, res) => {
                if (err) {
                    console.log("Error while update status", err);
                    result(null, err);
                } else {
                    result(null, res);
                    console.log(" update status");

                }

            });
            console.log("task done successfully");
        }
    });

}
Todo.test = (id, result) => {
    dbConn.query("SELECT * FROM selectedtask where taskid=?", [id], (err, res) => {
        let last_check = res[0][`last_check`];
        let y = moment().format("HH:mm:ss")



        if (err) {
            console.log("Error while fetching tasks", err);
            result(null, err);
        } else {
            console.log("task fetched successfully");
            console.log(addTimes(last_check, y))
            console.log(y)
            console.log(last_check)
        }
    });

}

Todo.getAllTodaytodo = (result) => {
    dbConn.query("SELECT * FROM task WHERE taskid IN(SELECT taskid FROM selectedtask) ", (err, res) => {
        if (err) {
            console.log("Error while fetching tasks", err);
            result(null, err);
        } else {
            console.log("tasks fetched successfully");
            result(null, res);
        }
    });
};

module.exports = Todo;
