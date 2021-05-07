import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
      <div className="navbar-desktop-C61RwL">
        <div className="buttonrow-HPBo1Y">
          <div className="b5-Wfh8x7 smart-layers-pointers dmsans-bold-gunsmoke-14px-2">LOG IN</div>
          <div className="button-primary-desktop-Wfh8x7">
            <div className="font-eo3nRY valign-text-middle dmsans-bold-white-14px">SIGN UP</div>
          </div>
        </div>
        <div className="frame-HPBo1Y"><img className="vector-azHmrH" src="./import/img/vector-88@2x.png" /></div>
        <div className="frame-15-HPBo1Y">
          <div className="navitem-hover-S6Kvjz">
            <div className="textframe-VBTaE4"><div className="b1-jxM0bb dmsans-bold-baltic-sea-14px">HOME</div></div>
            <div className="indicator-VBTaE4 smart-layers-pointers"></div>
          </div>
          <div className="navitem-default-S6Kvjz">
            <div className="textframe-FdqQMQ"><div className="b1-EnImxV dmsans-bold-gunsmoke-14px">MPOWER</div></div>
            <div className="indicator-FdqQMQ"></div>
          </div>
          <div className="navitem-default-df9eD3">
            <div className="textframe-Eg20wO"><div className="b3-kHiIGi dmsans-bold-gunsmoke-14px">COMPANY</div></div>
            <div className="indicator-Eg20wO"></div>
          </div>
          <div className="navitem-default-OUMgDx">
            <div className="textframe-udu9xB"><div className="b4-vpgDzt dmsans-bold-gunsmoke-14px">PARTNERS</div></div>
            <div className="indicator-udu9xB"></div>
          </div>
        </div>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
