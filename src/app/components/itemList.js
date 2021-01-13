import React from 'react'
import '../css/itemList.css'

const ItemList = (props) => {
    return (
        <div className="list">
            <ul>
                {/*Icone do fontawesome*/}
                <li><i class="fas fa-check"></i>{props.text}</li>
            </ul>
        </div>
    )
}

export default ItemList