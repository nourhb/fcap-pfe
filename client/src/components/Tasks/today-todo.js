/* eslint-disable */
import React, { useState, useEffect } from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import 'https://kit.fontawesome.com/a076d05399.js';
function TodoToday() {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState([]);


  const loadTask = async (id) => {
    axios.get(`http://localhost:5000/api/v1/todo/today/tasks`).then((response) => {

      setTasks(response.data);
      getStatus(id);
    }); 
  };
  useEffect(() => {
    loadTask();
    
  }, []);

  const getStatus = async (id) => {
    axios.get(`http://localhost:5000/api/v1/task/status/${id}`)
    .then((response) => {
      let { result } = response.data
      console.log("this is th eresult",result[0])
      setStatus(result);
    });
   
  };



  const firstStatus = async (id) => {

    axios.put(`http://localhost:5000/api/v1/todo/today/task/firstStatus/${id}`)
      .then((result) => {
        loadTask();
        getStatus(id);
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };
  const secondStatus = async (id) => {

    axios.put(`http://localhost:5000/api/v1/todo/today/task/secondStatus/${id}`)
      .then((result) => {
        loadTask();
        getStatus(id);
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };
  const thirdStatus = async (id) => {

    axios.put(`http://localhost:5000/api/v1/todo/today/task/thirdStatus/${id}`)
      .then((result) => {
        loadTask();
        getStatus(id);

      })
      .catch(() => {
        alert("Error in the Code");
      });
  };

  const fourthStatus = async (id) => {

    axios.put(`http://localhost:5000/api/v1/todo/today/task/fourthStatus/${id}`)
      .then((result) => {
        loadTask();
        getStatus(id);
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };

  return (
    <div className="wallpaper w3-display-container w3-animate-opacity w3-text-white">
      <div id="center">
        <section id="todo-cmp">
          <header id="todo-cmp__header">
            <div className='todo3' />
            <a href="/todo"><button class="custom-btn btn-12"><span>Click here</span><span>Back </span></button> </a>

            <h2>To Do</h2>
            <p>List</p>
          </header>
          <table >
            <tbody>
              {tasks.map((task) => (
                <tr key={task.taskid} id='labeltodo' ><hr/>
                  <td> <input type="checkbox" /> </td>
                  <td width={"150px"}>	{task.title}</td>
                  <td width={"300px"}>	{task.instruction}</td>
                  <td width={"50px"}>   {task.duration}</td>
                  <td width={"80px"} value={task.taskid}><i class="gg-play-button-o" onClick={() => { firstStatus(task.taskid) }}></i></td>
                  {
                    (status && status == 1) ? <td width={"80px"} value={task.taskid}><i class="gg-play-button-o" onClick={() => { firstStatus(task.taskid) }}></i></td>
                    : null
                  }
                  <td width={"80px"} value={task.taskid}><i class='fas fa-redo' style={{ fontSize: "35px", marginTop: "8px" }} onClick={() => { thirdStatus(task.taskid) }}></i></td>
                  <td width={"80px"} value={task.taskid}><i class="gg-play-pause-o" onClick={() => { secondStatus(task.taskid) }}></i></td>
                  <td width={"90px"} value={task.taskid}><i class="gg-check-o" onClick={() => { fourthStatus(task.taskid) }}></i></td>
                  {
                    (status == 3) ? alert('Done') : null
                  }                  {
                    task.count < 3 &&
                    <button> test </button>
                  }
                </tr>
              ))}</tbody></table>
        </section> </div>
    </div>

  )
}
export default TodoToday;
