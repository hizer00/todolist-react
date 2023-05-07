import React from 'react'
import { Outlet } from 'react-router-dom'
import './Todolist.css'
import Footer from '../../layout/Footer'

import components from '../../components'
import taskManager from '../../hooks/taskManager';

function Todolist() {

  const { getTasks, createTask, deleteTask } = taskManager();

  function submitTask() {
    const inputTitle = document.getElementById("task-input-title");
    const inputDescription = document.getElementById("task-input-description");

    if(!inputTitle.value || !inputDescription.value) return;

    createTask(inputTitle.value, inputDescription.value)

    inputTitle.value = "";
    inputDescription.value = "";
  }

  function taskDone(button) {
    const taskId = button.parentElement.id;

    deleteTask(taskId);
  }

  return (
    <>

      <div className='task-inputs'>
        <components.InputGeneric placeholder="Task title" id="task-input-title"/>
        <components.InputGeneric placeholder="Task description" id="task-input-description"/>
        <components.ButtonTick id="task-button" func={submitTask}/>
      </div>

      <div className='task-list'>
          {
            getTasks().map(t => (
                <components.Task title={t.title} description={t.description} id={t.id} doneFunc={taskDone}/>
            ))
          }
      </div>

      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default Todolist