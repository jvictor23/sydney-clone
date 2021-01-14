import React from 'react'
import '../css/cardApp.css'
const CardApp = (props) => {
    return (
        /*Verifica o type passado pelo props caso seja 1 background é #7575da se nao é white*/
        <div className="cardApp" style={props.type === 1 ? { backgroundColor: '#7575DA' } : { backgroundColor: 'white' }}>
            <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-3 d-flex justify-content-center align-items-center" style={{ height: '100px', }}>
                        {props.children}
                    </div>
                    <div className="col-lg-9 flex-column d-flex justify-content-center">
                        <span className="titleApp" style={props.type === 1 ? { color: 'white' } : { color: 'black' }}>Download on the</span>
                        <span className="subtitleApp" style={props.type === 1 ? { color: 'white' } : { color: '#393689' }}>{props.app}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardApp