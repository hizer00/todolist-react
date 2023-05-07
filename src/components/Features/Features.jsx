import React from 'react'
import './Features.css'

import imagePlaceholder from '../../assets/illustrations/Time-management.svg'

export default function Features({
    title = "TITLE",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis sapien id neque viverra hendrerit. Sed malesuada neque eu blandit tincidunt. Nunc at eros dui. Etiam lacinia convallis enim sit amet egestas. Integer ac sem molestie, dictum sem egestas, ornare nunc. Cras urna turpis, aliquam a congue et, eleifend a ipsum. Mauris quis mi ac libero vestibulum bibendum.",
    image = { imagePlaceholder }
}) {

    return (
        <article className='fs-container'>
            <div className='fs-text'>
                <h1 className='fs-title'>{title}</h1>
                <p className='fs-description'>{description}</p>
            </div>
            <img src={image} alt='image' className='fs-illustration' />
        </article>
    )

}
