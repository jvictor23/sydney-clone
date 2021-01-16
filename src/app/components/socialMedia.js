import React from 'react'
import '../css/socialMedia.css'
const SocialMedia = () => {
    return (

        <div className="row d-flex justify-content-between" style={{ width: '215px' }}>
            {/*Circulo Facebook*/}
            <div className="col-3 circulo">
                <i className="fab fa-facebook-f"></i>
            </div>
            {/*Circulo Twitter*/}
            <div className="col-3 circulo">
                <i className="fab fa-twitter"></i>
            </div>
            {/*Circulo Youtube*/}
            <div className="col-3 circulo">
                <i className="fab fa-youtube"></i>
            </div>
            {/*Circulo Instagram*/}
            <div className="col-3 circulo">
                <i className="fab fa-instagram"></i>
            </div>
        </div>

    )
}

export default SocialMedia