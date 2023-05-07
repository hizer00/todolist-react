import React from 'react'
import './ButtonInteraction.css'

import deleteIcon from "../../assets/delete.svg"

export default function ButtonInteraction({ text = "delete", func, className }) {
    return (
        <button class={"i-btn" + (className ? " " + className : "")} onClick={(e) => func(e.currentTarget)}>
            <p class="i-text"> {text} </p>
            <span class="icon-wrapper">
                <svg class="icon" width="45px" height="45px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7.5L7 10L11 5" stroke="#000000" />
                </svg>
            </span>
        </button>
    )
}
