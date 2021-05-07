/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
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

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
