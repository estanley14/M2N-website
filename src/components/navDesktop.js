import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

//IMAGES
import vector1382x from "../import/img/vector-138@2x.png"
import vector882x from "../import/img/vector-88@2x.png"

const NavDesktop = ({ theme }) => {
  return (
    <div>
      {theme === "dark" ? (
        <div className="navbar-desktop-C61RwL">
          <Link to="">
            <div className="buttonrow-HPBo1Y">
              <div className="button-text-des-op-i63817129573-Wfh8x7 dmsans-bold-gunsmoke-14px-2">LOG IN</div>
              <div className="button-primary-desktop-Wfh8x7">
                <div className="font-i63817129575-eo3nRY valign-text-middle dmsans-bold-white-14px">SIGN UP</div>
              </div>
            </div>
          </Link>
          <div className="frame-HPBo1Y"><img className="vector-azHmrH" src={vector1382x} /></div>
          <div className="frame-15-HPBo1Y">
            <div className="navitem-default-S6Kvjz smart-layers-pointers">
              <div className="textframe-FdqQMQ">
              <Link to="/">
                <div className="home-i63817129687129678-EnImxV dmsans-bold-gunsmoke-14px">HOME</div>
              </Link>
              </div>
              <div className="indicator-FdqQMQ"></div>
            </div>
            <div className="navitem-hover-S6Kvjz">
              <div className="textframe-VBTaE4">
              <Link to="/mpower">
                <div className="home-i63817129691129683-jxM0bb dmsans-bold-white-14px">MPOWER</div>
              </Link>
              </div>
              <div className="indicator-VBTaE4 smart-layers-pointers"></div>
            </div>
            <div className="navitem-default-df9eD3">
              <div className="textframe-Eg20wO">
              <Link to="/company">
                <div className="b1-i63817129695129678-kHiIGi smart-layers-pointers dmsans-bold-gunsmoke-14px">COMPANY</div>
              </Link>
              </div>
              <div className="indicator-Eg20wO"></div>
            </div>
            <div className="navitem-default-OUMgDx">
              <div className="textframe-udu9xB">
              <Link to="/partners">
                <div className="b1-i63817129699129678-vpgDzt smart-layers-pointers dmsans-bold-gunsmoke-14px">PARTNERS</div>
              </Link>
              </div>
              <div className="indicator-udu9xB"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-desktop-C61RwL">
        <Link to="">
          <div className="buttonrow-HPBo1Y">
            <div className="b5-Wfh8x7 smart-layers-pointers dmsans-bold-gunsmoke-14px-2">LOG IN</div>
            <div className="button-primary-desktop-Wfh8x7">
              <div className="font-eo3nRY valign-text-middle dmsans-bold-white-14px">SIGN UP</div>
            </div>
          </div>
        </Link>
        <div className="frame-HPBo1Y"><img className="vector-azHmrH" src={vector882x} /></div>
        <div className="frame-15-HPBo1Y">
          <div className="navitem-hover-S6Kvjz">
            <div className="textframe-VBTaE4">
              <Link to="/"><div className="b1-jxM0bb dmsans-bold-baltic-sea-14px">HOME</div></Link>
            </div>
            <div className="indicator-VBTaE4 smart-layers-pointers"></div>
          </div>
          <div className="navitem-default-S6Kvjz">
            <div className="textframe-FdqQMQ">
              <Link to="/mpower"><div className="b1-EnImxV dmsans-bold-gunsmoke-14px">MPOWER</div></Link>
            </div>
            <div className="indicator-FdqQMQ"></div>
          </div>
          <div className="navitem-default-df9eD3">
            <div className="textframe-Eg20wO">
              <Link to="/company"><div className="b3-kHiIGi dmsans-bold-gunsmoke-14px">COMPANY</div></Link>
            </div>
            <div className="indicator-Eg20wO"></div>
          </div>
          <div className="navitem-default-OUMgDx">
            <div className="textframe-udu9xB">
              <Link to="/partners"><div className="b4-vpgDzt dmsans-bold-gunsmoke-14px">PARTNERS</div></Link>
            </div>
            <div className="indicator-udu9xB"></div>
          </div>
        </div>
      </div>
      )}
      
    </div>
  )
}

export default NavDesktop
