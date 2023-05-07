import React from 'react'
import './CheckboxTick.css'

export default function CheckboxTick() {
    return (
        <>
            <label class="container">
                <input type="checkbox" checked="checked" />
                <div class="checkmark"></div>
            </label>
        </>
    )
}
