/* eslint-disable */
import React, { useState, useEffect } from 'react'
import axios from "axios";
function TodoToday() {
  const [tasks, setTasks] = useState([]);


  async function loadTask() {
    await axios.get(`http://localhost:5000/api/v1/todo/today/tasks`).then((response) => {
      setTasks(response.data);
      console.log(response.data);
    }, (err) => {
      console.log("err in loading data from backend");
      console.log(err);
      setTasks([]);
    });
  }
  useEffect(() => {
    loadTask();
  }, []);
  
  const firstStatus = async (id) => {

    axios.put(`http://localhost:5000/api/v1/todo/today/task/firstStatus/${id}`)
      .then((result) => {
        loadTask();
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };
  const secondStatus = async (id) => {

    axios.put(`http://localhost:5000/api/v1/todo/today/task/secondStatus/${id}`)
      .then((result) => {
        loadTask();
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };
  const thirdStatus = async (id) => {
    axios.put(`http://localhost:5000/api/v1/todo/today/task/thirdStatus/${id}`)
      .then((result) => {
        loadTask();
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };

  const fourthStatus = async (id) => {
    axios.put(`http://localhost:5000/api/v1/todo/today/task/fourthStatus/${id}`)
      .then((result) => {
        loadTask();
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
          <table >                    <thead>
            <tr >

              <th ></th>
              <th >task title</th>
              <th>   instruction</th>
              <th> duration</th>
              <th> action</th>


            </tr>
          </thead>
            <tbody>
              {
                tasks.map((task) => (
                  <tr key={task.taskid} height={"55px"} ><hr />
                  
                    <td width={"250px"}>	{task.title}</td>
                    <td width={"250px"}>	{task.instruction}</td>
                    <td width={"250px"}>	{task.duration}</td>


                    {/* <td width={"300px"}>	{task.instruction}</td>
                    <td width={"50px"}>   {task.duration}</td> */}
                    {
                      task.status == 0 &&
                      <td width={"80px"} value={task.taskid}><i class="gg-play-button-o" onClick={() => { firstStatus(task.taskid) }}></i></td>
                    }

                    {
                      (task.status == 1) &&
                      <>
                        <td width={"90px"} value={task.taskid}><i class="gg-check-o" onClick={() => { fourthStatus(task.taskid) }}></i></td>
                      </>
                    }
                    {
                      (task.status == 1 && task.count < 3) &&
                      <>
                        <td width={"80px"} value={task.taskid}><i class="gg-play-pause-o" onClick={() => { secondStatus(task.taskid) }}></i></td>
                      </>
                    }

                    {
                      (task.status == 2) &&
                      <td width={"80px"} value={task.taskid}><i class='fas fa-redo' style={{ fontSize: "35px", marginTop: "8px" }} onClick={() => { thirdStatus(task.taskid) }}></i></td>

                    }
                    {
                      (task.status == 3) && <td> terminé</td>
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
      </div>
    </div>

  )
}
export default TodoToday; 
