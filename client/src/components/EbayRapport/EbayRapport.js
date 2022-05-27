import axios from "axios";
import React, { useState, useEffect } from "react";
import LoadRapport from "./LoadRapport";
import "../styles/searchbox.css"
import { ImSearch } from "react-icons/im";
import swal from 'sweetalert';
 

function EbayRapport() {
  const [record, setRecord] = useState([]);
  const [search, setSearch] = useState("");
  const [modalShowprint, setModalShowprint] = useState("");

  const loadRapport = async () => {
    await axios.get(`http://localhost:5000/api/v1/ebay/rapport`).then((response) => {
      console.log(response.data)
      setRecord(response.data)


    });
  };
  useEffect(() => {
    loadRapport();
  }, []);
  const searchRecords = () => {
    alert(search);

    axios
      .get(`http://localhost:5000/api/v1/ebay/searchRecord/${search}`)
      .then((response) => {
        setRecord(response.data);
      });
  };
  const deleteRecord = async () => {
    await axios
      .delete(`http://localhost:5000/api/v1/ebay`)
      .then((result) => {
        swal({
          title: "Poof! Deletion completed successfully!",
          icon: "success",
        });
        loadRapport();

      })
      .catch(() => {
        alert("Error in the Code");
      });
  };

  function printDiv() {
    var divContents = document.getElementById("GFG").innerHTML; var a = window.open('', '', 'height=1000, width=1000');
    a.document.write('<html>');
    a.document.write("<body> <h1>Div contents are <br>");
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
  }

  return (

    <div className="wallpaper w3-display-container w3-animate-opacity w3-text-white">
      <section>
        <h1 style={{ marginLeft: "35%", fontSize: "60px" }}>
          Ebay rapport
        </h1>                  <span className="task" style={{ marginRight: "100px" }} />
   
             <div className="input-group mb-4 mt-3">
          <div className="form-outline" style={{ marginLeft: "3.5%" , marginTop:"-20%" }}>
            < div id='search' >
              <div className="search-box" style={{ marginLeft: "-55%", marginTop: "20%" }}>
                <button className="btn-search" type="button"
                  onClick={searchRecords}><ImSearch id="btnsearch" /></button>
                <input type="text" className="input-search" placeholder="Type to Search..."
                  onChange={(e) => setSearch(e.target.value)}
                  required={true} /></div>
            </div>
            <LoadRapport />    

            <button style={{ marginLeft: "3.5%" , marginTop:"20%" }} className="btn btn-danger"
              onClick={() => {
                const confirmBox = window.confirm("Do you really want to delete all invoices records ?");
                if (confirmBox === true) {
                  deleteRecord();
                } else {
                  swal({ title: "Don't worry, it won't be deleted!" });
                }

              }}>delete invoices  records
            </button>
            <button className="btn btn-info btn-sm mr-2"
              onClick={() => printDiv()}
            >Print</button>



          </div>
        </div>

        <div className="col-sm-11" id="GFG">
          <table className="table table-striped " border="1" style={{ marginLeft: "5%", width: "100%" }} >
            <thead>
              <tr className="table-success" >
                <th>Sales record</th>
                <th>Buyer country</th>
                <th>Item number</th>
                <th>Item title</th>
                <th>Custom label</th>
                <th>Sold for</th>
                <th>Postage and packaging</th>
                <th>Sale date</th>
                <th>Delivery service</th>
                <th>Tracking number</th>


              </tr>
            </thead>
            <tbody>
              {record.map((name, key) => (
                <tr className="table-warning" key={name['Sales record']}>
                  <td>{name['Sales record']}</td>
                  <td>{name['Buyer country']}</td>
                  <td>{name['Item number']}</td>
                  <td>{name['Item title']}</td>
                  <td>{name['Custom label']}</td>
                  <td>{name['Sold for']}</td>
                  <td>{name['Postage and packaging']}</td>
                  <td>{name['Sale date']}</td>
                  <td>{name['Delivery service']}</td>
                  <td>{name['Tracking number']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></section>

    </div>
  )
}

export default EbayRapport