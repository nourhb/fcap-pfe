/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";


function TaskArchive() {
    const [record, setRecord] = useState([]);
    function refreshPage() {
        window.location.reload(false);
    }
    // On Page load display all records
    const loadTaskDetail = async () => {
       await  axios.get(`http://localhost:5000/api/v1/archive_task`).then((response) => {
            setRecord(response.data);
        });
    };

    useEffect(() => {
        loadTaskDetail();
    }, []);

    const deleteRecord =async () => {
        alert("Deleted Successfully");

        await axios
            .delete(`http://localhost:5000/api/v1/archive_task`),{method: 'DELETE'}
            .then((result) => {
                loadTaskDetail();
            })
            .catch(() => {
                alert("Error in the Code");
            });
    };
    return (
        <div className="wallpaper w3-display-container w3-animate-opacity w3-text-white">
            <section>
                <h1 style={{ marginLeft: "35%", fontSize: "60px" }}>
                    Task archive
                </h1>
                <div className="col-sm-11">
                    <button className="btn btn-info" style={{ marginLeft: "3.5%", marginTop: "12%" }}  onClick={() => {
                        refreshPage(); const confirmBox =
                            window.confirm(
                                "Do you really want to archived all this archive ?"

                            );
                        if (confirmBox === true) {
                            deleteRecord();
                        }
                    }}  >
                        Delete if you want
                    </button>
                    <div className="input-group mb-4 mt-3">
                    </div>
                    <table className="table table-striped" style={{ marginLeft: "1%", width: "90%" }} >
                        <thead>
                            <tr className="table-success">
                                <th>id</th>
                                <th>title</th>
                                <th>instruction</th>
                                
                                <th>duration</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {record.map((name, index) => (
                                <tr className="table-warning" key={name.id}>
                                    <td>{name.taskid}</td>
                                    <td>{name.title}</td>
                                    <td>{name.instruction}</td>
                                    <td>{name.duration}</td>
                                    <td>{name.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div></section></div>
    );
}

export default TaskArchive;
