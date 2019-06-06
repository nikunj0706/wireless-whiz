import React from 'react'
import clientImage from "../static/images/icon-image/author.jpg"

const Testimonial = () => (
   <section id="testimonial" className="main-container">
  <div className="container">
    <div className="row">
      <div className="col text-center">
        <div className="section-heading">
          <h2>
            <small>Client’s Love</small>
            Love from <span>Client</span>
          </h2>
          <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
        </div>
      </div>
      {/* COl End */}
    </div>
    {/* Row End */}
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <div className="testimonial-slider owl-carousel">
          <div className="testimonial-content">
            <div className="testimonial-image">
              <img src= {clientImage} alt="client-image" />
            </div>
            <div className="testimonial-meta">
              <h4>
                Jason Stattham
                <small>CEO Microhost</small>
              </h4>
              <i className="icon icon-quote2" />
            </div>
            {/* Testimonial Meta end */}
            <div className="testimonial-text">
              <p>Start working with an company that can do provide every thing at you need to generate awareness,
                drive traffic, connect with</p>
            </div>
            {/* TEstimonial text end */}
          </div>
          {/* Testimonial Content End */}
          <div className="testimonial-content">
            <div className="testimonial-image">
              <img src= {clientImage} alt="client-image" />
            </div>
            <div className="testimonial-meta">
              <h4>
                Jason Stattham
                <small>CEO Microhost</small>
              </h4>
              <i className="icon icon-quote2" />
            </div>
            {/* Testimonial Meta end */}
            <div className="testimonial-text">
              <p>Start working with an company that can do provide every thing at you need to generate awareness,
                drive traffic, connect with</p>
            </div>
            {/* TEstimonial text end */}
          </div>
          {/* Testimonial Content End */}
          <div className="testimonial-content">
            <div className="testimonial-image">
              <img src= {clientImage} alt="client-image" />
            </div>
            <div className="testimonial-meta">
              <h4>
                Jason Stattham
                <small>CEO Microhost</small>
              </h4>
              <i className="icon icon-quote2" />
            </div>
            {/* Testimonial Meta end */}
            <div className="testimonial-text">
              <p>Start working with an company that can do provide every thing at you need to generate awareness,
                drive traffic, connect with</p>
            </div>
            {/* TEstimonial text end */}
          </div>
          {/* Testimonial Content End */}
        </div>
        {/* Carousel End */}
      </div>
      {/* COl End */}
    </div>
    {/* Row End */}
  </div>
  {/* Container End */}
</section>

)

export default Testimonial