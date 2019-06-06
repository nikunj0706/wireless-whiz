import React from 'react'

import arrowLeft from "../static/images/funfacts/arrow_left.png"
import arrowRight from "../static/images/funfacts/arrow_right.png"
import fact1 from "../static/images/icon/fact1.png"
import fact2 from "../static/images/icon/fact2.png"
import fact3 from "../static/images/icon/fact3.png"
import fact4 from "../static/images/icon/fact4.png"

const Statastics = () => (
<section id="tw-facts" className="tw-facts">
  <div className="facts-bg-pattern d-none d-lg-block">
    <img className="wow fadeInLeft" src={arrowLeft} alt="arrwo_left" />
    <img className="wow fadeInRight" src={arrowRight} alt="arrow_right" />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-3 text-center">
        <div className="tw-facts-box">
          <div className="facts-img wow zoomIn" data-wow-duration="1s">
            <img src={fact1} alt="fact1" className="img-fluid" />
          </div>
          {/* End Fatcs image */}
          <div className="facts-content wow fadeInUp" data-wow-duration="1s">
            <h4 className="facts-title">Devices Fixed</h4>
            <span className="counter">3500</span>
            <sup>+</sup>
          </div>
          {/* Facts Content End */}
        </div>
        {/* Facts Box End */}
      </div>
      {/* Col End */}
      <div className="col-md-3 text-center">
        <div className="tw-facts-box">
          <div className="facts-img wow zoomIn">
            <img src={fact2} alt="fact2" className="img-fluid" />
          </div>
          {/* End Facts Image */}
          <div className="facts-content wow slideInUp">
            <h4 className="facts-title">Satisfied Customers</h4>
            <span className="counter">2200</span>
            <sup>+</sup>
          </div>
          {/* End Facts Content */}
        </div>
        {/* End Facts Box */}
      </div>
      {/* Col End */}
      <div className="col-md-3 text-center">
        <div className="tw-facts-box">
          <div className="facts-img wow zoomIn">
            <img src={fact3} alt="fact3" className="img-fluid" />
          </div>
          {/* End Facts Image */}
          <div className="facts-content wow slideInUp">
            <h4 className="facts-title">Success Rate</h4>
            <span className="counter">98</span>
            <sup>%</sup>
          </div>
          {/* End Facts Content */}
        </div>
        {/* End Facts Box */}
      </div>
      {/* Col End */}
      <div className="col-md-3 text-center">
        <div className="tw-facts-box">
          <div className="facts-img wow zoomIn">
            <img src={fact4} alt="fact4" className="img-fluid" />
          </div>
          {/* End Facts Image */}
          <div className="facts-content wow slideInUp">
            <h4 className="facts-title">Years of Experience</h4>
            <span className="counter">10</span>
            <sup>+</sup>
          </div>
          {/* End Facts Content */}
        </div>
        {/* End Facts Box */}
      </div>
      {/* Col End */}
    </div>
    {/* Row End */}
  </div>
  {/* Container End */}
</section>

)

export default Statastics