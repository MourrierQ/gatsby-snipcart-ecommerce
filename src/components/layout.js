/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Typography from "../styles/Typography"
import GlobalStyles from "../styles/GlobalStyles"

const LayoutStyles = styled.div`
  .container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }
`

const Layout = ({ children }) => {

  return (
    <LayoutStyles>
      <GlobalStyles/>
      <Typography/>
      <div className="container">
        {children}
      </div>
    </LayoutStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
