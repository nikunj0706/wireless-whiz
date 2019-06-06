import React from 'react'
import featureIcon1 from "../static/images/icon/feature_color1.png"
import featureIcon2 from "../static/images/icon/feature_color2.png"
import featureIcon3 from "../static/images/icon/feature_color3.png"
const Features = () => (
   <section id="tw-features" className="tw-featured">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
        <div className="features-box">
          <div className="features-icon d-table">
            <div className="features-icon-inner d-table-cell">
              <img src={featureIcon1} alt="feature-icon-1" />
            </div>
            {/* End Features icon inner */}
          </div>
          {/* End Features Icon */}
          <h3>Smart Phone Repair</h3>
          <p>Disassembly &amp; replacement guides for the original iPhone, iPhone 3GS, iPhone 4.
          </p>
        </div>
        {/* End Single Features */}
      </div>
      {/* Col End */}
      <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".4s">
        <div className="features-box">
          <div className="features-icon d-table">
            <div className="features-icon-inner d-table-cell">
              <img src={featureIcon2} alt="feature-icon-2" />
            </div>
            {/* End Features Icon inner */}
          </div>
          {/* End Features Icon */}
          <h3>Tablets and Ipad Repair</h3>
          <p>If you are facing any problem with your Tablets / Ipads.
          </p>
        </div>
        {/* End Single Features */}
      </div>
      {/* end col */}
      <div className="col-lg-4 col-md-12  wow fadeInUp" data-wow-duration="1.9s" data-wow-delay=".6s">
        <div className="features-box">
          <div className="features-icon d-table">
            <div className="features-icon-inner d-table-cell">
              <img src={featureIcon3} alt="feature-icon-3" />
            </div>
            {/* End Features Icon inner */}
          </div>
          {/* End Features Icon */}
          <h3>Desktop and Laptop Repair</h3>
          <p>We specialist in providing On-Site Computer Desktop Repair Service and Network Support.
          </p>
        </div>
        {/* End Single Features */}
      </div>
      {/* End col */}
    </div>
    {/* End Row 2 */}
  </div>
  {/* End Container */}
</section>


)

export default Features