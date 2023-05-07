import React from 'react'
import './ButtonGeneric.css'

export default function ButtonGeneric({ content = "Button", active = false}) {
  return (
    <button className={"button-generic" + (active ? " button-active" : "")}>  
      <span className="button-top">{content}</span>
    </button>
  )
}
