import React from 'react'
import './ButtonTick.css'
import whiteTick from '../../assets/whiteTick.svg'
import greenTick from '../../assets/greenTick.svg'

export default function ButtonTick({ func, id }) {
    return (
        <button class="btn" id={id} onClick={func}>
            <img src={whiteTick} alt="tick icon" className='white-tick'/>
            <img src={greenTick} alt="tick icon" className='green-tick'/>
        </button>
    )
}
