import React from 'react'
import '../css/itemSolution.css'

const ItemSolution = (props) => {
    return props.type === 1 ? (

        <div className="row">
            <div className="col-3 ">
                <div className="circulo1">
                    <img id="svg" className="svg" src={props.icon} />
                </div>
            </div>
            <div className="col-9">
                <h4 className="title">{props.title}</h4>
                <h6 className="subtitle">{props.subtitle}</h6>
            </div>
        </div>

    ) : (<div className="row" >
        <div className="col-3">
            <div className="circulo2">
                <img id="svg" className="svg" src={props.icon} />
            </div>
        </div>
        <div className="col-9">
            <h4 className="title">{props.title}</h4>
            <h6 className="subtitle">{props.subtitle}</h6>
        </div>
    </div>)
}

export default ItemSolution