import React, { useState } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"

import mpowerLogo from "../images/mpower-logo.svg"
import arrowBack from "../images/Arrow-Back.svg"

const NavMobile = ({ setModalState }) => {

    return (
        <div className="email-modal">
            <img src={mpowerLogo} alt=""/>
            <h2>Beta Access</h2>
            <p className="label">Sign up to receive Beta Access</p>
            <input placeholder="Enter your Email Address" type="text"/>
            <button>Subscribe</button>
            <div className="link-back" onClick={()=> setModalState(false)}>
                <img src={arrowBack} alt="Back Arrow"/>
                <span>Back to MPower</span>
            </div>
        </div>
    )
}

export default NavMobile
