var dbConn = require("../config/db.config");

var EMPArchive = function (emparchive) {
    this.cin = employee.cin;
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.city = employee.city;
    this.zip = employee.zip;
    this.dep = employee.dep;
    this.password = employee.password;
};

EMPArchive.getAllEMP = (result) => {
    dbConn.query("SELECT * FROM emparchive", (err, res) => {
        if (err) {
            console.log("Error while fetching EMP", err);
            result(null, err);
        } else {
            console.log("EMP fetched successfully");
            result(null, res);
        }
    });
};


EMPArchive.deleteEMP = (result) => {
    dbConn.query("TRUNCATE  table emparchive ", (err, res) => {
        if (err) {
            console.log("Error while deleting the EMP");
            result(null, err);
        }
        else {
            console.log("Employee archive archivedd successfully", res);

        }
    });
};
module.exports = EMPArchive;
