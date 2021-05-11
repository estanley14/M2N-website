import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// IMAGES
import vector4462x from "../import/img/vector-446@2x.png"
import vector3542x from "../import/img/vector-354@2x.png"


const NavTablet = ({ theme }) => {
    return (
        <div>
            {theme === "dark" ? (
              <div className="navbar-tablet-C61RwL">
                <Link to="/mpower-app">
                    <div className="buttonrow-Xq4ViJ">
                    <div className="b1-i6384462736-DkfaGf dmsans-bold-gunsmoke-14px-2">LOG IN</div>
                    <div className="button-primary-desktop-DkfaGf">
                        <div className="font-i6384462738-GrCJVF valign-text-middle dmsans-bold-white-14px">SIGN UP</div>
                    </div>
                    </div>
                </Link>
                <Link to="/">
                    <div className="logo-Xq4ViJ"><img className="vector-paUNwS" src={vector4462x} /></div>
                </Link>
                <div className="navlinks-Xq4ViJ">
                  <div className="navitem-default-VcMpYN">
                    <div className="textframe-XIn0T6">
                    <Link to="/">
                        <div className="b1-i6384462742129678-pTXg1E dmsans-bold-gunsmoke-14px">HOME</div>
                    </Link>
                    </div>
                    <div className="indicator-XIn0T6"></div>
                  </div>
                  <div className="navitem-hover-VcMpYN">
                    <div className="textframe-x0oTG4">
                    <Link to="/mpower">
                        <div className="home-i6384462743129683-qVUPyA dmsans-bold-white-14px">MPOWER</div>
                    </Link>
                    </div>
                    <div className="indicator-x0oTG4 smart-layers-pointers"></div>
                  </div>
                  <div className="navitem-default-h3NML7">
                    <div className="textframe-HffetE">
                    <Link to="/company">
                        <div className="b1-i6384462744129678-poT6nI dmsans-bold-gunsmoke-14px">COMPANY</div>
                    </Link>
                    </div>
                    <div className="indicator-HffetE"></div>
                  </div>
                  <div className="navitem-default-jBtke6">
                    <div className="textframe-sUuHDU">
                    <Link to="/partners">
                        <div className="b1-i6384462745129678-xtuTw9 dmsans-bold-gunsmoke-14px">PARTNERS</div>
                    </Link>
                    </div>
                    <div className="indicator-sUuHDU"></div>
                  </div>
                </div>
              </div>
            ) : (
                <div className="navbar-tablet-C61RwL">
                    <Link to="/mpower-app">
                        <div className="buttonrow-Xq4ViJ">
                            <div className="b5-DkfaGf dmsans-bold-gunsmoke-14px-2">LOG IN</div>
                            <div className="button-primary-desktop-DkfaGf">
                                <div className="font-GrCJVF valign-text-middle dmsans-bold-white-14px">SIGN UP</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="logo-Xq4ViJ"><img className="vector-paUNwS" src={vector3542x} /></div>
                    </Link>
                    <div className="navlinks-Xq4ViJ">
                    <div className="navitem-hover-VcMpYN">
                        <Link to="/">
                            <div className="textframe-x0oTG4"><div className="b1-qVUPyA dmsans-bold-baltic-sea-14px">HOME</div></div>
                        </Link>
                        <div className="indicator-x0oTG4 smart-layers-pointers"></div>
                    </div>
                    <div className="navitem-default-VcMpYN">
                        <Link to="/mpower">
                        <div className="textframe-XIn0T6"><div className="b1-pTXg1E dmsans-bold-gunsmoke-14px">MPOWER</div></div>
                        </Link>
                        <div className="indicator-XIn0T6"></div>
                    </div>
                    <div className="navitem-default-h3NML7">
                        <Link to="/company">
                            <div className="textframe-HffetE"><div className="b3-poT6nI dmsans-bold-gunsmoke-14px">COMPANY</div></div>
                        </Link>
                        <div className="indicator-HffetE"></div>
                    </div>
                    <div className="navitem-default-jBtke6">
                        <Link to="/partners">
                            <div className="textframe-sUuHDU"><div className="b4-xtuTw9 dmsans-bold-gunsmoke-14px">PARTNERS</div></div>
                        </Link>
                        <div className="indicator-sUuHDU"></div>
                    </div>
                    </div>
                </div>
            )}

        </div>
        )
}

export default NavTablet
