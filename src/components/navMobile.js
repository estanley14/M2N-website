import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavMobile = ({ theme }) => {
    return (
        <div>
            {theme === "dark" ? (
                <div className="navbar-mobile-C61RwL">
                    <div className="logo-gTO9GM"><img className="vector-xvusrZ" src="./import/img/vector-494@2x.png" /></div>
                    <div className="menu24px-gTO9GM">
                    <img className="iconnavigationmenu24px-xsYvp9" src="./import/img/icon-navigation-menu-24px-1@2x.png" />
                    </div>
                </div>
            ) : (
                <div className="navbar-mobile-C61RwL">
                    <div className="logo-gTO9GM"><img className="vector-xvusrZ" src="./import/img/vector-443@2x.png" /></div>
                    <div className="menu24px-gTO9GM">
                    <img className="iconnavigationmenu24px-xsYvp9" src="./import/img/icon-navigation-menu-24px@2x.png" />
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default NavMobile
