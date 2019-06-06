import React, { Component } from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import "../static/css/font-awesome.min.css"
import "../static/css/animate.css"
import "../static/css/icofonts.css"
import "../static/css/bootstrap.min.css"
import "../static/css/owlcarousel.min.css"
import "../static/css/magnific-popup.css"
import "../static/css/style.css"
import "../static/css/responsive.css"

import ImportScripts from "./importScripts"
const Layout = (props) => {
      const { children } = props;
    
            return (
              <React.Fragment>
                {/* <Helmet
                  title={title}
                >
                  <html dir="ltr" lang="en" />
                </Helmet> */}
                <main>{children}</main>
                <ImportScripts />
              </React.Fragment>
            );
          }
      
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default Layout;
  