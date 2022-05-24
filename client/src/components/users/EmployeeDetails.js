/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Addusermodal from './adduser'
import "../styles/searchbox.css"
import { ImSearch } from "react-icons/im";
import EditEmployee from "./EditEmployee";
import { useTracking } from "react-tracking";
import swal from 'sweetalert';
import Printmodal from './Print'


function EmployeeDetail() {
    const [search, setSearch] = useState("");
    const [record, setRecord] = useState([]);
    const [modalShowadduser, setModalShowadduser] = useState(false);
    const [modalShowedit, setModalShowedit] = useState(0);
    const { trackEvent } = useTracking();
    const [modalShowprint, setModalShowprint] = useState("");



    // On Page load display all records
    const loadEmployeeDetail = async () => {
        await axios.get(`http://localhost:5000/api/v1/employee`)
            .then((response) => {
                setRecord(response.data);
            });
    };
    useEffect(() => {
        console.log(localStorage.getItem('role'))
        loadEmployeeDetail();
    }, []);


    // Search Records here
    const searchRecords = () => {
        alert(search);
        axios
            .get(`http://localhost:5000/api/v1/employee/searchRecord/${search}`)
            .then((response) => {
                setRecord(response.data);
            });
    };
    const ArchiveRecord = (productId) => {
        swal({
            title: "Poof! Archiving completed successfully!",
            icon: "success",
        });
        axios
            .put(`http://localhost:5000/api/v1/employee//archiveRecord/${productId}`)
            .then((result) => {

                loadEmployeeDetail();
            })
            .catch(() => {
                alert("Error in the Code");
            });
    };


    const createHistory = () => {

        trackEvent({
            operation: "Delete employee ",
            user: localStorage.getItem('role'),
            time: new Date().toLocaleString(),
        })
    }

    return (
        <div className="wallpaper w3-display-container w3-animate-opacity w3-text-white">
            <section>
                <h1 className="mb-4 text-center mt-4" style={{ marginLeft: "7%", fontSize: "60px" }}>
                    Employee managment
                </h1>
                <div className="col-sm-11">
                    <div className="team" />
                    <button style={{ marginLeft: "3.5%", marginTop: "12%" }} className="btn btn-info" onClick={() => setModalShowadduser(true)}>
                        Add user
                    </button>
                    <Addusermodal
                        show={modalShowadduser}
                        onHide={() => setModalShowadduser(false)}
                    />
                    <div className="input-group mb-4 mt-3">
                        <div className="form-outline" style={{ marginLeft: "3.5%" }}>
                            < div id='search' >
                                <div className="search-box">
                                    <button className="btn-search" type="button"
                                        onClick={searchRecords}><ImSearch id="btnsearch" /></button>
                                    <input type="text" className="input-search" placeholder="Type to Search..."
                                        onChange={(e) => setSearch(e.target.value)}
                                        required={true} /></div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped " style={{ marginLeft: "5%", width: "100%" }} >
                        <thead>
                            <tr className="table-success">
                                <th>initial id</th>
                                <th>Cin</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>City</th>
                                <th>Zip</th>
                                <th>department</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {record.map((name, index, key) => (
                                <tr className="table-warning" key={index}>
                                    <td>{name.initialid}</td>
                                    <td>{name.cin}</td>
                                    <td>{name.first_name}</td>
                                    <td>{name.last_name}</td>
                                    <td>{name.email}</td>
                                    <td>{name.phone}</td>
                                    <td>{name.city}</td>
                                    <td>{name.zip}</td>
                                    <td>{name.roles}</td>
                                    <td>
                                        <button className="btn btn-info btn-sm mr-2"
                                            onClick={() => setModalShowedit(name.id)}
                                        >Edit</button>
                                        {modalShowedit === name.id ? <EditEmployee
                                            key={index} data={modalShowedit}
                                            show={modalShowedit === name.id}
                                            onHide={() => setModalShowedit(null)}
                                        /> : <></>}

                                        <button className="btn btn-info btn-sm mr-2"
                                            onClick={() => setModalShowprint(name.id)}
                                        >Print</button>
                                        {modalShowprint === name.id ? <Printmodal
                                            key={index} data={modalShowprint}
                                            show={modalShowprint === name.id}
                                            onHide={() => setModalShowprint(null)}
                                        /> : <></>}


                                        <button className="btn btn-outline-warning btn-sm mr-2"

                                            onClick={() => {
                                                const confirmBox =
                                                    window.confirm(
                                                        "Do you really want to archive " +
                                                        name.first_name
                                                    );
                                                if (confirmBox === true) {
                                                    ArchiveRecord(name.id); createHistory()
                                                }
                                                else {
                                                    swal({ title: "Don't worry, it won't be archived!" });
                                                }

                                            }}
                                        >
                                            Archive
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default EmployeeDetail;
