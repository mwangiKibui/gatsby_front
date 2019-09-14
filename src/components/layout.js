/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import "./layout.css";
import "../styles/components.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          year
        }
      }
    }
  `)

  return (
    <>
      <Header brand={data.site.siteMetadata.title} />
      <div className="container contents_holder">
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-8 content">
              <main>{children}</main>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
              <Sidebar />
          </div>
        </div>    
        <Footer author={data.site.siteMetadata.author} year={data.site.siteMetadata.year} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
