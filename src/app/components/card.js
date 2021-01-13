import React from 'react'
import '../css/card.css'
const Card = (props) => {
    return (
        <div className="card" style={{ float: props.float }}>
            {props.children}
        </div>
    )
}

export default Card