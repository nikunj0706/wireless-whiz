import React from 'react'
import place from "../static/images/icon/place1.png"

const ContactUs = () => (
    <>
     <section id="tw-contact-us" className="tw-contact-us bg-offwhite">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="section-heading text-center">
          <h2>
            <small>leave a message</small>
            Give a <span>Message</span>
          </h2>
          <span className="animate-border border-ash ml-auto mr-auto tw-mt-20 tw-mb-40" />
        </div>
      </div>
      {/* Col End */}
    </div>
    {/* Row End */}
    <div className="contact-us-form">
      <form id="contact-form" className="contact-form" action="contact-form.php" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <div className="error-container" />
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input className="form-control form-name" name="name" id="name" placeholder="Name" type="text" required />
            </div>
          </div>
          {/* Col end */}
          <div className="col-lg-6">
            <div className="form-group">
              <input className="form-control form-phone" name="phone" id="phone" placeholder="Phone" type="phone" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input className="form-control form-email" name="email" id="email" placeholder="Email" type="email" required />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input className="form-control form-subject" placeholder="Subject" name="subject" id="subject" type="text" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <textarea className="form-control form-message required-field" id="message" placeholder="Comments" rows={5} defaultValue={""} />
            </div>
          </div>
          {/* Col 12 end */}
        </div>
        {/* Form row end */}
        <div className="text-center">
          <button className="btn btn-primary tw-mt-30" type="submit">Contact US</button>
        </div>
      </form>
      {/* Form end */}
    </div>
    {/* Contact us form end */}
  </div>
  {/* Container End */}
</section>
{/* Contact End */}



             <section id="contact" className="main-container">
  <div className="container">
    <div className="row">
      <div className="col text-center">
        <div className="section-heading">
          <h2>
            <small>Contact us</small>
            Our Contact <span>Details</span>
          </h2>
          <span className="animate-border tw-mt-20 tw-mb-40 ml-auto mr-auto" />
        </div>
        {/* End Heading */}
      </div>
      {/* End Col */}
    </div>
    {/* End Title Row */}
    <div className="row">
      <div className="col-md-4">
        <div className="tw-contact-box">
          <div className="contact-heading">
            <img src={place} alt="place" className="img-fluid" />
            <h3>Contact Us</h3>
          </div>
          {/* End Content Heading */}
          <div className="contact-info-box-content">
            <i className="fa fa-map-marker" />
            <p>1-1024 Upper Wentworth St, Hamilton, ON L9A 4V9</p>
            <i className="fa fa-phone" />
            <p><a href="tel:289 799-1986"> (289) 799-1986</a></p>
            <i className="fa fa-envelope" />
            <p><a href="mailto:info@wirelesswhiz.ca">info@wirelesswhiz.ca</a></p>
          </div>
          {/* End content info box */}
        </div>
        {/* End Contact Box */}
      </div>
      {/* End Col */}
      <div className="col-md-8">
        <div id="map">
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.6532894847314!2d-79.86770168500938!3d43.216760888561055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9a5a826291a1%3A0x996c433221649a97!2sWireless+Whiz+-+Cell+Phone+Repair!5e0!3m2!1sen!2sin!4v1559744043730!5m2!1sen!2sin" style={{border: 0, width: '100%'}} allowFullScreen />
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
    {/* End Row */}
  </div>
  {/* Container End */}
</section>
{/* Contact End */}

    </>

)

export default ContactUs