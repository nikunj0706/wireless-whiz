import React from 'react'
import image1 from "../static/images/about/about-img.jpg"
import image2 from "../static/images/about/repair1.jpg"
import image3 from "../static/images/about/acc2.jpg"
const Services = () => (
    
<section id="services" className="tw-inro-item">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-12 text-lg-right text-md-center wow fadeInLeft" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft'}}>
        <img src={image1} alt="repair-image-1" className="img-fluid" />
      </div>
      {/* End Col */}
      <div className="col-lg-6 ml-auto align-self-center col-md-12 wow fadeInRight" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight'}}>
        <h2 className="column-title light">Phone Repairs Starting at $40</h2>
        <p>
          We specialize in repairing phones, with most repairs completed within 30 mins!<br /> Services include screen repairs, battery replacements, charging port replacements, water damage cleaning, and much more! Diagnosis is always free so come in anytime for a quote.
        </p>
        {/* End Intro list */}
      </div>
      {/* End Col */}
    </div>
    <div className="row tw-inro-item">
      <div className="col-lg-4 align-self-center col-md-12">
        <h2 className="column-title light">Phone Repairs At Unbeatable Prices</h2>
        <p>
          We strive to deliver the lowest prices on repairs in Hamilton. If we can’t do the repair on the spot within a few hours, you’re welcome to borrow a free-to-use loaner phone until we can have your repair completed.
        </p>
      </div>
      {/* End Col */}
      <div className="col-lg-7 offset-lg-1 col-md-12 text-lg-right">
        <img src={image2} alt="repair-image-2" className="img-fluid" />
      </div>
      {/* End Col */}
    </div>
    <div className="row tw-inro-item">
      <div className="col-lg-5 col-md-12 text-lg-right text-md-center wow fadeInLeft" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft'}}>
        <img src={image3} alt="repair-image-3" className="img-fluid" />
      </div>
      {/* End Col */}
      <div className="col-lg-6 ml-auto align-self-center col-md-12 wow fadeInRight" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight'}}>
        <h2 className="column-title light">Great Prices On Accessories, too!</h2>
        <p>
          Wireless Whiz has come up with a one-stop solution for all your mobile accessories need. If you are looking for protective accessories, you will find a wide range of mobile case and covers. The comprehensive collection of cases and covers include different types of case or covers for various phones.
        </p>
        {/* End Intro list */}
      </div>
      {/* End Col */}
    </div>
  </div>
</section>


)

export default Services