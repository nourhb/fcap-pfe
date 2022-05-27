import React from 'react'
import EmployeeActivity from './dashType/EmployeeActivity'
import TaskProgress from './dashType/taskStatus'
export default function DashboardAdmin() {
  return (<div>
    <div>DashboardAdmin</div>
    <TaskProgress/>
    <EmployeeActivity/>
  </div>
  )
}
