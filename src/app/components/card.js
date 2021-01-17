import React from 'react'
import '../css/card.css'
const Card = (props) => {
    return (
        <div className="cardWorkFaster" style={{ float: props.float }}>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Card