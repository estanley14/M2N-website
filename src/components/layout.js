/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { NewHeader } from './NewHeader'
import NewSideNav from './NewSideNav'
import NewFooter from './NewFooter'
import { useLocation } from '@reach/router'
// import Header from "./header"
// import "./layout.css"
// CUSTOM
import "../import/css/company-mobile-320px.css"
import "../import/css/contact-mobile-320px.css"
import "../import/css/globals.css"
import "../import/css/home-tablet-720px.css"
import "../import/css/mpower-email-submission-end-desktop-1440px.css"
import "../import/css/mpower-email-submission-end-mobile-320px.css"
import "../import/css/mpower-email-submission-end-desktop-1440px.css"
import "../import/css/mpower-email-submission-start-desktop-1440px.css"
import "../import/css/mpower-email-submission-start-mobile-320px.css"
import "../import/css/mpower-landing-mobile-320px.css"
import "../import/css/mpower-mobile-320px.css"
import "../import/css/partnerships-desktop-1440px.css"
import "../import/css/styleguide.css"
import "../import/css/mobile-nav-320px.css"
import "./custom.css"
import icon from "../import/img/favicon.ico"

import Nav from '../context/Nav'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { pathname } = useLocation()

  function setHeaderTheme(path) {
    if (path === '/') {
      return 'light'
    } else if (path === '/mpower/') {
      return 'dark'
    } else if (path === '/organization/') {
      return 'dark'
    } else if (path === '/company/') {
      return 'light'
    } else if (path === '/partners/') {
      return 'light'
    } else if (path === '/mpower-app/') {
      return 'dark'
    } else if (path === '/contact-us') {
      return 'light'
    }
  }

  function setHeaderDisplay(path) {
    if (path === '/mpower-app/') {
      return 'none'
    } else {
      return 'flex'
    }
  }

  let headerTheme = setHeaderTheme(pathname)
  let displayValue = setHeaderDisplay(pathname)

  return (
    <>
      
      <Helmet>
        <link rel="shortcut icon" type="image/jpg" href={icon}/>
        {/* <!-- Start of HubSpot Embed Code --> */}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/20008151.js"></script>
        {/* <!-- End of HubSpot Embed Code --> */}
      </Helmet>
      <Nav>
        <NewHeader headerTheme={headerTheme} headerDisplay={displayValue} />
        <NewSideNav />
        <main>{children}</main>
        <NewFooter footerDisplay={displayValue} />
      </Nav>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      {/* <div> */}
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
