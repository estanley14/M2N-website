import React, { useState } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"

import mpowerLogo from "../images/mpower-logo.svg"
import arrowBack from "../images/Arrow-Back.svg"

const NavMobile = ({ setModalState }) => {

    return (
        <form action="">
            <div className="email-modal">
                <img src={mpowerLogo} alt="" />
                <h2>Beta Access</h2>
                <p className="label">Sign up to receive Beta Access</p>
                <input name="email" placeholder="Enter your Email Address" type="email" />
                <input type="submit" value="Subscribe" />
                <div className="link-back" onClick={() => setModalState(false)}>
                    <img src={arrowBack} alt="Back Arrow" />
                    <span>Back to MPower</span>
                </div>
            </div>
        </form>
    )
}

export default NavMobile
