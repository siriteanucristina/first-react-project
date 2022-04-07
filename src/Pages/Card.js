import React from 'react'

function Card({ title, imageURL, body }) {
    return (
        <div className='container'>
            <div className="container-image">
                <img src={imageURL} />
            </div>
            <div className="container-title">
                <h3>{title}</h3>
            </div>
            <div className="container-body">
                <p>{body}</p>
            </div>
            <button className="container-button"><a href="https://naturescu.com/natura/13-tipuri-diferite-de-fluturi/" target='_blank'>More information</a></button>

        </div>
    )
}

export default Card