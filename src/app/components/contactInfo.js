import React from 'react'
import '../css/contactInfo.css'
const ContactInfo = () => {
    return (
        <ul className="list-unstyled py-4">
            <li>
                <i aria-hidden="true" class="fas fa-map-marker-alt icon"></i>
                <span className="contactInfo">7176 Blue Spring Lane Santa Monica, CA 90403</span>
            </li>
            <li>
                <i aria-hidden="true" class="fas fa-phone-alt icon"></i>
                <span className="contactInfo">+01 123 456 888</span>
            </li>
            <li>
                <i aria-hidden="true" class="fas fa-envelope icon"></i>
                <span className="contactInfo">Sydney.support@gmail.com</span>
            </li>
            <li></li>
        </ul>
    )
}

export default ContactInfo