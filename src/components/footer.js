import React from 'react'

const Footer = () => (
    <footer id="tw-footer" className="tw-footer">
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span>Copyright © {new Date().getFullYear()}, All Right Reserved</span>
          </div>
          {/* End Col */}
          <div className="col-md-6">
            <div className="copyright-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#tw-facts">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#testimonial">Testimonial</a>
                </li>
              </ul>
            </div>
          </div>
          {/* End col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Copyright Container */}
    </div>
    {/* End Copyright */}
    {/* Back to top */}
    <div id="back-to-top" className="back-to-top">
      <button className="btn btn-dark" title="Back to Top">
        <i className="fa fa-angle-up" />
      </button>
    </div>
    {/* End Back to top */}
  </footer>
  
  

)


export default Footer