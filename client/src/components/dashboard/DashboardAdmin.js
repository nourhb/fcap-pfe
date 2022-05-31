import React from 'react'
import EmployeeActivity from './dashType/EmployeeActivity'
import TaskProgress from './dashType/taskStatus'
import TaskProgressPerDep from './dashType/taskStatusperdep'
export default function DashboardAdmin() {
  return (<div>
<TaskProgress />
    <EmployeeActivity />
{/*<TaskProgressPerDep/>*/}




  </div>
  )
}
