// Importing mysql and csvtojson packages
// Requiring module
const csvtojson = require('csvtojson');
const mysql = require("mysql");
const express = require("express");
const router = express.Router();
var con = require("../config/db.config");

router.post('/ebay', (result, error, next) => {

    con.connect((err) => {
        if (err) return console.error(
            'error: ' + err.message);

        con.query("DROP TABLE sample",
            (err, drop) => {
                next
                // Query to create table "sample"
                var createStatament =
                    "CREATE TABLE sample (Sales record int DEFAULT NULL,Order number varchar(225) DEFAULT NULL,Buyer username varchar(225) DEFAULT NULL,Buyer name varchar(225) DEFAULT NULL,Buyer email varchar(225) DEFAULT NULL,Buyer note varchar(225) DEFAULT NULL,Buyer address 1 varchar(225) DEFAULT NULL,Buyer address 2 varchar(225) DEFAULT NULL,Buyer city varchar(225) DEFAULT NULL,Buyer county varchar(225) DEFAULT NULL,Buyer postcode varchar(225) DEFAULT NULL,Buyer country varchar(225) DEFAULT NULL,Buyer tax identifier name int DEFAULT NULL,Buyer tax identifier value int DEFAULT NULL,Post to name varchar(225) DEFAULT NULL,Post to phone varchar(225) DEFAULT NULL,Post to address 1 varchar(225) DEFAULT NULL,Post to address 2 varchar(225) DEFAULT NULL,Post to city varchar(225) DEFAULT NULL,"
                    + "Post to county varchar(225) DEFAULT NULL,Post to postcode varchar(225) DEFAULT NULL,Post to country varchar(225) DEFAULT NULL,Item number varchar(225) DEFAULT NULL,Item title varchar(225) DEFAULT NULL,Custom label varchar(225) DEFAULT NULL,Sold via Promoted listings varchar(225) DEFAULT NULL,Quantity int DEFAULT NULL,Sold for varchar(225) DEFAULT NULL,Postage and packaging varchar(225) DEFAULT NULL,Item location varchar(225) DEFAULT NULL,Item postcode varchar(225) DEFAULT NULL,Item country varchar(225) DEFAULT NULL,Included VAT rate varchar(225) DEFAULT NULL,eBay Collect And Remit Tax Rate varchar(225) DEFAULT NULL,eBay Collect And Remit Tax Type varchar(225) DEFAULT NULL,eBay reference name varchar(225) DEFAULT NULL,eBay reference value varchar(225) DEFAULT NULL,Tax status varchar(225) DEFAULT NULL,"
                    + "Seller collected tax varchar(225) DEFAULT NULL,eBay collected tax varchar(225) DEFAULT NULL,Electronic waste recycling fee varchar(225) DEFAULT NULL,Mattress recycling fee varchar(225) DEFAULT NULL,Battery recycling fee varchar(225) DEFAULT NULL,White goods disposal tax varchar(225) DEFAULT NULL,Tyre recycling fee int DEFAULT NULL,Additional fee int DEFAULT NULL,Total price int DEFAULT NULL,eBay collected tax and fees included in total varchar(225) DEFAULT NULL,Payment method varchar(225) DEFAULT NULL,Sale date date DEFAULT NULL,Paid on date date DEFAULT NULL,Post by date date DEFAULT NULL,Minimum estimated delivery date date DEFAULT NULL,Maximum estimated delivery date date DEFAULT NULL,Dispatched on date date DEFAULT NULL,Feedback left varchar(225) DEFAULT NULL,Feedback received varchar(225) DEFAULT NULL,My item note varchar(225) DEFAULT NULL,PayPal transaction ID varchar(225) DEFAULT NULL,Delivery service varchar(225) DEFAULT NULL,Tracking number varchar(225) DEFAULT NULL,Transaction ID varchar(225) DEFAULT NULL,Variation details varchar(225) DEFAULT NULL,Global Shipping Programme varchar(225) DEFAULT NULL,Global Shipping Reference ID varchar(225) DEFAULT NULL,Click and Collect varchar(225) DEFAULT NULL,Click and Collect Reference Number varchar(225) DEFAULT NULL,eBay Plus varchar(225) DEFAULT NULL,eBay Fulfilment Programme varchar(225) DEFAULT NULL))"

                // Creating table "sample"
                con.query(createStatament, (err, drop) => {
                    next 
                    if (err)
                        console.log("ERROR: ", err);
                });
            });
    });

    // CSV file name
    const fileName = "C:/Users/user/Desktop/fcap-pfe/server/routes/sample.csv";

    csvtojson().fromFile(fileName).then(source => {

        // Fetching the data from each row
        // and inserting to the table "sample"
        for (var i = 0; i < source.length; i++) {
            var Salesrecord = source[i]["Sales record number"],
                Ordernumber = source[i]["Order number"],
                Buyerusername = source[i]["Buyer username"],
                Buyername = source[i]["Buyer name"],
                Buyeremail = source[i]["Buyer email"],
                Buyernote = source[i]["Buyer note"],
                Buyeraddress1 = source[i]["Buyer address 1"],
                Buyeraddress2 = source[i]["Buyer address 2"],
                Buyercity = source[i]["Buyer city"],
                Buyercounty = source[i]["Buyer county"],
                Buyerpostcode = source[i]["Buyer postcode"],
                Buyercountry = source[i]["Buyer country"],
                Buyertaxidentifiername = source[i]["Buyer tax identifier name"],
                Buyertaxidentifiervalue = source[i]["Buyer tax identifier value"],
                Posttoname = source[i]["Post to name"],
                Posttophone = source[i]["Post to phone"],
                Posttoaddress1 = source[i]["Post to address 1"],
                Posttoaddress2 = source[i]["Post to address 2"],
                Posttocity = source[i]["Post to city"],
                Posttocounty = source[i]["Post to county"],
                Posttopostcode = source[i]["Post to postcode"],
                Posttocountry = source[i]["Post to country"],
                Itemnumber = source[i]["Item number"],
                Itemtitle = source[i]["Item title"],
                Customlabel = source[i]["Custom label"],
                SoldviaPromotedlistings = source[i]["Sold via Promoted listings"],
                Quantity = source[i]["Quantity"],
                Soldfor = source[i]["Sold for"],
                Postageandpackaging = source[i]["Postage and packaging"],
                Itemlocation = source[i]["Item location"],
                Itempostcode = source[i]["Item postcode"],
                Itemcountry = source[i]["Item country"],
                IncludedVATrate = source[i]["Included VAT rate"],
                eBayCollectAndRemitTaxRate = source[i]["eBay Collect And Remit Tax Rate"],
                eBayCollectAndRemitTaxType = source[i]["eBay Collect And Remit Tax Type"],
                eBayreferencename = source[i]["eBay reference name"],
                eBayreferencevalue = source[i]["eBay reference value"],
                Taxstatus = source[i]["Tax status"],
                Sellercollectedtax = source[i]["Seller collected tax"],
                eBaycollectedtax = source[i]["eBay collected tax"],
                Electronicwasterecyclingfee = source[i]["Electronic waste recycling fee"],
                Mattressrecyclingfee = source[i]["Mattress recycling fee"],
                Batteryrecyclingfee = source[i]["Battery recycling fee"],
                Whitegoodsdisposaltax = source[i]["White goods disposal tax"],
                Tyrerecyclingfee = source[i]["Tyre recycling fee"],
                Additionalfee = source[i]["Additional fee"],
                Totalpricee = source[i]["Total price"],
                eBaycollectedtaxandfeesincludedintotal = source[i]["eBay collected tax and fees included in total	"],
                Paymentmethod = source[i]["Payment method"],
                Saledate = source[i]["Sale date"],
                Paidondate = source[i]["Paid on date"],
                Postbydate = source[i]["Post by date"],
                Minimumestimateddeliverydate = source[i]["Minimum estimated delivery date"],
                Maximumestimateddeliverydate = source[i]["Maximum estimated delivery date"],
                Dispatchedondate = source[i]["Dispatched on date"],
                Feedbackleft = source[i]["Feedback left"],
                Feedbackreceived = source[i]["Feedback received"],
                Myitemnote = source[i]["My item note"],
                PayPaltransactionID = source[i]["PayPal transaction ID"],
                Deliveryservice = source[i]["Delivery service"],
                Trackingnumber = source[i]["Tracking number	"],
                TransactionID = source[i]["Transaction ID"],
                Variationdetails = source[i]["Variation details"],
                GlobalShippingProgramme = source[i]["Global Shipping Programme"],
                GlobalShippingReferenceID = source[i]["Global Shipping Reference ID"],
                ClickandCollect = source[i]["Click and Collect"],
                ClickandCollectReferenceNumber = source[i]["Click and Collect Reference Number "],
                eBayPlus = source[i]["eBay Plus"],
                eBayFulfilmentProgramme = source[i]["eBay Fulfilment Programme"]



            var insertStatement =
                `INSERT IGNORE INTO sample values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            var items = [
                Salesrecord,
                Ordernumber,
                Buyerusername,
                Buyername,
                Buyeremail,
                Buyernote,
                Buyeraddress1,
                Buyeraddress2,
                Buyercity,
                Buyercounty,
                Buyerpostcode,
                Buyercountry,
                Buyertaxidentifiername,
                Buyertaxidentifiervalue,
                Posttoname,
                Posttophone,
                Posttoaddress1,
                Posttoaddress2,
                Posttocity,
                Posttocounty,
                Posttopostcode,
                Posttocountry,
                Itemnumber,
                Itemtitle,
                Customlabel,
                SoldviaPromotedlistings,
                Quantity,
                Soldfor,
                Postageandpackaging,
                Itemlocation,
                Itempostcode,
                Itemcountry,
                IncludedVATrate,
                eBayCollectAndRemitTaxRate,
                eBayCollectAndRemitTaxType,
                eBayreferencename,
                eBayreferencevalue,
                Taxstatus,
                Sellercollectedtax,
                eBaycollectedtax,
                Electronicwasterecyclingfee,
                Mattressrecyclingfee,
                Batteryrecyclingfee,
                Whitegoodsdisposaltax,
                Tyrerecyclingfee,
                Additionalfee,
                Totalpricee,
                eBaycollectedtaxandfeesincludedintotal,
                Paymentmethod,
                Saledate,
                Paidondate,
                Postbydate,
                Minimumestimateddeliverydate,
                Maximumestimateddeliverydate,
                Dispatchedondate,
                Feedbackleft,
                Feedbackreceived,
                Myitemnote,
                PayPaltransactionID,
                Deliveryservice,
                Trackingnumber,
                TransactionID,
                Variationdetails,
                GlobalShippingProgramme,
                GlobalShippingReferenceID,
                ClickandCollect,
                ClickandCollectReferenceNumber,
                eBayPlus,
                eBayFulfilmentProgramme];

            // Inserting data of current row
            // into database

            con.query(insertStatement, items,
                (err, results, fields) => {
                    next 
                    if (err) {
                        console.log(
                            "Unable to insert item at row ", i + 1);
                        return console.log(err);
                    }
                });
        }
        console.log(
            "All items stored into database successfully");
    });
});

router.get("/rapport",(request, response) => {
        con.query("SELECT * FROM sample", (err, res) => {
            if (err) {
                console.log("Error while fetching rapport", err);
                response.status(401).json(err)
            } else {
                console.log("rapport fetched successfully");
                response.status(200).json(res)
            }
        });
    });

router.get("/searchrecord/:salerecord", (req, response) => {
    let salerecord = req.params.salerecord ;
    con.query("SELECT * FROM sample Where `Sales record`=?",salerecord, (err, res) => {
        if (err) {
            console.log("Error while fetching rapport", err);
            
            response.status(401).json(err)
        } else {
            console.log("searched successfully" , res);
            
            response.status(200).json(res)
        }
    });
});

router.delete("/", (result) => {
    dbConn.query("TRUNCATE  table sample ", (err, res) => {
        if (err) {
            console.log("Error while deleting", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });

});


module.exports = router