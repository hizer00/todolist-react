import React from 'react'
import components from '../index';

import './Task.css'

export default function Task({ title = "TITLE", description = "DESCRIPTION", id, doneFunc}) {
  return (
    <div className='t-container' id={id}>
      <h1 className='t-title'>{title}</h1>
      <p className='t-description'>{description}</p>
      <components.ButtonInteraction className='t-button' text='done' func={doneFunc}/>
    </div>
  )
}
