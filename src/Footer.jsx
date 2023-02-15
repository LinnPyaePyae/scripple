import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid row">
        <div className="col-3 copy mt-5">
          <img src="img/logo3.png" alt="" className="img" />
          <p className="scripple">Scripple</p>
          <div className="container ms-3">
            <i class="fa-brands fa-instagram me-3"></i>
            <i class="fa-brands fa-facebook me-3"></i>
            <i class="fa-brands fa-twitter me-3"></i>
            <p className="mt-2 copyright">
              Copyright © 2023 by Scripple, Inc. All rights reserved.
            </p>
          </div>
        </div>
        <div className="col-3 cts">
          <p className="contactus mt-5">Contact Us</p>
          <p className="contact">
            623 Harrison St., 2nd Floor, San Francisco, CA 94100
          </p>
          <p className="contact">415-201-6370 hello@scripple.com</p>
        </div>
        <div className="col-2">
          <p className="contactus mt-5">Account</p>
          <p className="contact">Create Account</p>
          <p className="contact">Sign in</p>
          <p className="contact">iOS app</p>
          <p className="contact">Andriod app</p>
        </div>
        <div className="col-2">
          <p className="contactus mt-5">Company</p>
          <p className="contact">Product</p>
          <p className="contact">Brand</p>
          <p className="contact">FAQ</p>
          <p className="contact">Contributor</p>
        </div>
        <div className="col-2">
          <p className="contactus mt-5">Resource</p>
          <p className="contact">Product Directory</p>
          <p className="contact">Help Center</p>
          <p className="contact">Privacy & terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
