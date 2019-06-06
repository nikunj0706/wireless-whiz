import React from 'react'

import logo from "../static/images/logo/whiz-logo.jpg"

const Header = () => (
  <header>
  <div className="tw-head tw-transparent">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand tw-nav-brand" href="#">
          <img src={logo} alt="wireless-whiz-logo" width="200px" />
        </a>
        {/* End of Navbar Brand */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        {/* End of Navbar toggler */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#tw-features">Bullets</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#tw-facts">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonial">Testimonial</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          {/* End Navbar Nav */}
        </div>
        {/* End of navbar collapse */}
        {/* End off canvas menu */}
      </nav>
      {/* End of Nav */}
    </div>
    {/* End of Container */}
  </div>
  {/* End tw head */}
</header>

)

export default Header