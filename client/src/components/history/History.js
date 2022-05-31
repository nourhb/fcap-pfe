/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/searchbox.css";
import { ImSearch } from "react-icons/im";
import swal from 'sweetalert';


function History() {
    const [search, setSearch] = useState("");
    const [record, setRecord] = useState([]);

    // On Page load display all records
    const loadHistory = async () => {
        await axios.get(`http://localhost:5000/api/v1/history`).then((response) => {
            setRecord(response.data);
        });
    };
    useEffect(() => {
        loadHistory();
    }, []);
    const deleteRecord = async () => {
        await axios
            .delete(`http://localhost:5000/api/v1/history`)
            .then((result) => {
                swal({
                    title: "Poof! Deletion completed successfully!",
                    icon: "success",
                });
                loadHistory();

            })
            .catch(() => {
                alert("Error in the Code");
            });
    };

    return (
        <div className="wallpaper w3-display-container w3-animate-opacity w3-text-white">
            <section>
                <h1 style={{ marginLeft: "45%", fontSize: "60px" }}>
                    History
                </h1>
                <div className="col-sm-11">
                    <div className="history" />
                    <div className="folder" />
                    <button style={{ marginLeft: "5%" }} className="btn btn-danger"
                        onClick={() => {
                            const confirmBox = window.confirm("Do you really want to delete all the history ?");
                            if (confirmBox === true) {
                                deleteRecord();
                            } else {
                                swal({ title: "Don't worry, it won't be deleted!" });
                            }

                        }}>delete history archive
                    </button>
                    <table className="table table-striped " style={{ marginLeft: "5%", width: "100%" }} >
                        <thead>
                            <tr className="table-success">
                                <th>id</th>
                                <th> operation</th>
                                <th>user</th>
                                <th>time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {record.map((name, index) => (
                                <tr className="table-warning" key={index}>
                                    <td>{name.id}</td>
                                    <td>{name.operation}</td>
                                    <td>{name.user}</td>
                                    <td>{name.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </section></div>
    );
}

export default History;

