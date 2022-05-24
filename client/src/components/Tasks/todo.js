import React, { useState, useEffect } from 'react'
import axios from "axios";
import './todo.css'
import Selected from '../selected';

function TodoTask() {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState([]);
  const [modalShowselected, setModalShowselected] = useState(false);

  const userid = localStorage.getItem('userid')

  const loadTask = async () => {
    const dep = localStorage.getItem('dep')

    axios.get("http://localhost:5000/api/v1/todo/today/tasks/" + dep).then((response) => {
      setTasks(response.data);
    });
  };
  useEffect(() => {
    loadTask();

  }, []);
  const selectTodo = async (e, id) => {
    const taskid = e.target.value;
    const dep = localStorage.getItem('dep')
    await axios.post(`http://localhost:5000/api/v1/todo/addselectedtask`, { taskid, dep, userid })
    getStatus(id);

  }
  const getStatus = async (id) => {
    axios.get(`http://localhost:5000/api/v1/task/status/${id}`)
      .then((result) => {
        let { response } = result.data
        console.log("this is the result", response[0])
        setStatus(response);
      });

  };
  return (
    <div className="wallpaper w3-display-container w3-animate-opacity w3-text-white">
      <div id="center">
        <section id="todo-cmp">
          <header id="todo-cmp__header">
            <div className='todo3' />
            <a href="/todotoday"><button class="custom-btn btn-12"><span>Click here</span><span>start </span></button> </a>

            <h2>To Do</h2>
            <p>List</p>
          </header>
          <table >
            <thead>
              <tr>
                <th ></th>
                <th >task title</th>
                <th>task instruction</th>
                <th >add to do </th>
                <th >already checked</th>

              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr height={"55px"} key={task.taskid}  >
                  <td width={"60px"}>  <div className='point' /> </td>
                  <td width={"200px"}>	{task.title}</td>
                  <td width={"200px"}>	{task.instruction}</td>
                  <td width={"150px"}>                                        <button
                    style={{
                      border: "3px solid #066892",
                      borderRadius: "13px"
                    }}
                    value={task.taskid}
                    onClick={(e) => {
                      const confirmBox =
                        window.confirm(
                          "you want to  add this task ? :  " +
                          task.title);
                      if (confirmBox === true) {
                        selectTodo(e);
                      }
                    }}
                  >
                    add
                  </button>
                  </td>
                  <td width={"30px"} >
                    {
                      (task.status_checked == 1) ? <div
                        class="checkedby" onClick={() => setModalShowselected(true)} /> : null
                    }
                  </td>
                  <Selected
                    show={modalShowselected}
                    onHide={() => setModalShowselected(false)}
                  />




                </tr>
              ))}</tbody></table>
        </section> </div>
    </div>
  )
}
export default TodoTask