import React, { useState, useEffect } from "react";

function Selected() {
    const [datas, setDatas] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/todo/todolist")
            .then((response) => response.json())
            .then((json) => setDatas(json));
    }, []);

    const handleSearch = (e) => {
        let value = e.target.value;
        setSearch(value);
    };
    console.log(datas);

    return (
        <div className="wallpaper w3-display-container w3-animate-opacity w3-text-white">
            <div>
                <h1 style={{ marginLeft: "35%", fontSize: "60px", color: "#130f40" }}>
                    List of tasks selected{" "}
                </h1>
            </div>
            <> <a href="/TaskDetails"><button className="btn btn-info">task</button></a></>

            <div className="input-group mb-4 mt-3">
                <div className="form-outline">
                    <input
                        type="text"
                        name="searchBar"
                        id="searchBar"
                        placeholder="Search departement"
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div>
                <div >
                    <table
                        className="table table-striped "
                        style={{ marginRight: "3%", width: "100%" }}
                    >
                        <thead>
                            <tr className="table-success">
                                <th>id</th>
                                <th>user</th>
                                <th>Departement</th>
                                <th>title</th>
                                <th>instruction</th>
                                <th>Type</th>
                                <th>duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas
                                .filter((val) => {
                                    return val.role.toLowerCase().includes(search.toLowerCase());
                                })

                                .map((val) => {
                                    return (

                                        <tr className="table-warning" key={val.taskid}>
                                            <td>{val.taskid}</td>
                                            <td>{val.user_id}</td>
                                            <td>{val.role}</td>
                                            <td>{val.title}</td>
                                            <td>{val.type}</td>
                                            <td>{val.instruction}</td>
                                            <td>{val.duration}</td>
                                        </tr>);
                                })}
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
}
export default Selected;
