import React, { useState } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"

import mpowerLogo from "../images/mpower-logo.svg"
import arrowBack from "../images/Arrow-Back.svg"
import styled from 'styled-components';

const StyledModal = styled.div`
    p {
        width: 80%;
        max-width: 1000px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;

        & a {
            color: lightblue;    
            
            :visited {
                color: mediumpurple;
            }
        }

        
    }
`

const ContactUsThankYouModal = ({ setModalState, location }) => {

    return (
        <StyledModal className="email-modal">
            <img src={mpowerLogo} alt="" />
            <h2>Thank you for contacting M2N</h2>
            <p>{location == "footer" ?
                `Your message has been sent and a member of our team will follow up with you.  We are currently building our platform and seeking feedback.  Please complete this short `
                :
                `Thank you for becoming an M2N Beta user.  We will invite you to explore our platform throughout the building process.  We are currently seeking some feedback and would appreciate your participation in this short `}
                <a href="https://7vevc0oib7s.typeform.com/to/IsBDWP3Z">survey</a> to help guide our decisions.
            </p>
            <div className="link-back" onClick={() => setModalState(false)}>
                <img src={arrowBack} alt="Back Arrow" />
                <span>Back to MPower</span>
            </div>
        </StyledModal >
    )
}

export default ContactUsThankYouModal
