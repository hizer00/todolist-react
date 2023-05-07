import React from 'react'
import './InputGeneric.css'

export default function InputGeneric({ placeholder, id }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input"
      id={id} />
  )
}
