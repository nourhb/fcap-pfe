var dbConn = require("../config/db.config");
var Sample = function (sample) {
    this.id = task.id;
    
};

Sample.getBuyerCountry = async (a, b) => { //data = req.body
    let ll = [];

    await dbConn.query("(SELECT count(id) as total FROM sample WHERE Buyer_country='United Kingdom' )", (err, res) => {
        if (err) {
            console.log("Error while fetching tasks", err);
        } else {
            console.log("task fetched successfully", res);
            ll.push(res[0].total)
        }
    });
    await dbConn.query("SELECT count(id) as total FROM sample WHERE Buyer_country not in ('United Kingdom') ", (err, res) => {
        if (err) {
            console.log("Error while fetching tasks", err);
        } else {
            console.log("task fetched successfully", res);
            ll.push(res[0].total)
            b(null, ll);
        }
    });
};

Sample.SoldViaPromotedListing = async (a, b) => { //data = req.body
    let ll = [];

    await dbConn.query("SELECT count(id) as total FROM sample WHERE Sold_via_Promoted_listings not in ('No') ", (err, res) => {
        if (err) {
            console.log("Error while fetching tasks", err);
        } else {
            console.log("task fetched successfully", res);
            ll.push(res[0].total)
        }
    });
    await dbConn.query("SELECT count(id) as total FROM sample WHERE Sold_via_Promoted_listings not in ('Yes') ", (err, res) => {
        if (err) {
            console.log("Error while fetching tasks", err);
        } else {
            console.log("task fetched successfully", res);
            ll.push(res[0].total)
            b(null, ll);
        }
    });
};


module.exports = Sample;
