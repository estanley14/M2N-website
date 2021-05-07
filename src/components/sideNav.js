import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// IMAGES
import vector4942x from "../import/img/vector-494@2x.png"

const SideNav = ({ setNavState }) => {
    return (
        <div>
            <input type="hidden" id="anPageName" name="page" value="mobile-nav-320px" />
            <div className="mobile-nav-320px screen">
            <div className="rectangle-778-C61RwL"></div>
            <Link to="/">
                <div className="frame-68-C61RwL">
                    <div className="textframe-zNiu1U"></div>
                    <h1 className="home-zNiu1U">HOME</h1>
                    {/* <div className="indicator-zNiu1U smart-layers-pointers"></div> */}
                    <img className="line-973-zNiu1U" src="./import/img/line-973@2x.png" />
                </div>
            </Link>
            <Link to="/mpower">
                <div className="frame-69-C61RwL">
                    <div className="textframe-FljbKi"></div>
                    <div className="mpower-FljbKi dmsans-bold-gunsmoke-24px">MPOWER</div>
                    {/* <div className="indicator-FljbKi smart-layers-pointers"></div> */}
                    <img className="line-973-FljbKi" src="./import/img/line-973@2x.png" />
                </div>
            </Link>
            <Link to="/company">
                <div className="frame-70-C61RwL">
                    <div className="textframe-PiyUW5"></div>
                    <div className="company-PiyUW5 dmsans-bold-gunsmoke-24px">COMPANY</div>
                    {/* <div className="indicator-PiyUW5 smart-layers-pointers"></div> */}
                    <img className="line-973-PiyUW5" src="./import/img/line-973@2x.png" />
                </div>
            </Link>
            <Link to="/partners">
                <div className="frame-71-C61RwL">
                    <div className="textframe-Qtr366"></div>
                    <div className="partners-Qtr366 dmsans-bold-gunsmoke-24px">PARTNERS</div>
                    {/* <div className="indicator-Qtr366 smart-layers-pointers"></div> */}
                    <img className="line-973-Qtr366" src="./import/img/line-973@2x.png" />
                </div>
            </Link>
            <Link to="/">
                <div className="frame-72-C61RwL">
                    <div className="textframe-DMZGJ0"></div>
                    <div className="login-sign-up-DMZGJ0 dmsans-bold-gunsmoke-24px">LOGIN / SIGN UP</div>
                    {/* <div className="indicator-DMZGJ0 smart-layers-pointers"></div> */}
                    <img className="line-973-DMZGJ0" src="./import/img/line-973@2x.png" />
                </div>
            </Link>
            <div className="x-C61RwL" style={{cursor: "pointer"}} onClick={()=> setNavState(false)}>
                <img className="vector-stroke-412M3r" src="./import/img/vector--stroke-@2x.png" />
                <img className="vector-stroke-pr9M1i" src="./import/img/vector--stroke--1@2x.png" />
            </div>
            </div>
            <div className="mobile-nav-720px screen">
            <div className="rectangle-778-C61RwL"></div>
            <Link to="/">
                <div className="frame-68-C61RwL">
                    <div className="textframe-zNiu1U"></div>
                    <div className="home-zNiu1U">HOME</div>
                    {/* <div className="indicator-zNiu1U smart-layers-pointers"></div> */}
                    <img className="line-973-zNiu1U" src="./import/img/line-973-5@1x.png" />
                </div>
            </Link>
            <Link to="/mpower">
                <div className="frame-69-C61RwL">
                    <div className="textframe-FljbKi"></div>
                    <div className="mpower-FljbKi dmsans-bold-gunsmoke-24px">MPOWER</div>
                    {/* <div className="indicator-FljbKi smart-layers-pointers"></div> */}
                    <img className="line-973-FljbKi" src="./import/img/line-973-5@1x.png" />
                </div>
            </Link>
            <Link to="/company">
                <div className="frame-70-C61RwL">
                    <div className="textframe-PiyUW5"></div>
                    <div className="company-PiyUW5 dmsans-bold-gunsmoke-24px">COMPANY</div>
                    {/* <div className="indicator-PiyUW5 smart-layers-pointers"></div> */}
                    <img className="line-973-PiyUW5" src="./import/img/line-973-5@1x.png" />
                </div>
            </Link>
            <Link to="/partners">
                <div className="frame-71-C61RwL">
                    <div className="textframe-Qtr366"></div>
                    <div className="partners-Qtr366 dmsans-bold-gunsmoke-24px">PARTNERS</div>
                    {/* <div className="indicator-Qtr366 smart-layers-pointers"></div> */}
                    <img className="line-973-Qtr366" src="./import/img/line-973-5@1x.png" />
                </div>
            </Link>
            <Link to="/">
                <div className="frame-72-C61RwL">
                    <div className="textframe-DMZGJ0"></div>
                    <div className="login-sign-up-DMZGJ0 dmsans-bold-gunsmoke-24px">LOGIN / SIGN UP</div>
                    {/* <div className="indicator-DMZGJ0 smart-layers-pointers"></div> */}
                    <img className="line-973-DMZGJ0" src="./import/img/line-973-5@1x.png" />
                </div>
            </Link>
            <div className="x-C61RwL" style={{cursor: "pointer"}} onClick={()=> setNavState(false)}>
                <img className="vector-stroke-412M3r" src="./import/img/vector--stroke--2@2x.png" />
                <img className="vector-stroke-pr9M1i" src="./import/img/vector--stroke--3@2x.png" />
            </div>
            </div>
        </div>
    )
}

export default SideNav
