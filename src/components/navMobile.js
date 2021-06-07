import React, { useState } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"

import SideNav from "./sideNav"

// IMAGES
import vector4942x from "../import/img/vector-494@2x.png"
import vector4432x from "../import/img/vector-443@2x.png"
import navImg1 from "../import/img/icon-navigation-menu-24px-1@2x.png"
import navImg2 from "../import/img/icon-navigation-menu-24px@2x.png"

const NavMobile = ({ theme }) => {
    const [navState, setNavState] = useState(false);

    return (
        <div>
            {theme === "dark" ? (
                <div className="navbar-mobile-C61RwL">
                    <Link to="/">
                        <div className="logo-gTO9GM"><img className="vector-xvusrZ" src={vector4942x} /></div>
                    </Link>
                    <div style={{cursor: "pointer"}} className="menu24px-gTO9GM" onClick={()=> setNavState(!navState)}>
                    <img className="iconnavigationmenu24px-xsYvp9" src={navImg1} />
                    </div>
                </div>
            ) : (
                <div className="navbar-mobile-C61RwL">
                    <Link to="/">
                        <div className="logo-gTO9GM"><img className="vector-xvusrZ" src={vector4432x} /></div>
                    </Link>
                    <div style={{cursor: "pointer"}} className="menu24px-gTO9GM" onClick={()=> setNavState(!navState)}>
                    <img className="iconnavigationmenu24px-xsYvp9" src={navImg2} />
                    </div>
                </div>
            )}

            {navState && (
                <SideNav setNavState={setNavState} />
            )}
            
        </div>
    )
}

export default NavMobile
