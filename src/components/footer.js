import React from "react";
import { Form, FormControl } from "react-bootstrap";
import {
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first">
        {/* <div className="col"> */}
        <div className="col1">
          <img src="img/logo.png" alt=""></img>
          <p className="footerp1">Get the lastes Updayes</p>
          <Form>
            <FormControl
              type="email"
              placeholder="Your Email"
              className="email"
              aria-label="email"
            ></FormControl>
            <button className="emailbtn">Email Me!</button>
          </Form>
        </div>
        {/* </div>
                <div className="col"> */}
        <div className=" col2">
          <h3>CryptoKet</h3>
          <p className="footerp2">Explore </p>
          <p className="footerp2">How it Works </p>
          <p className="footerp2"> Contact Us </p>
        </div>
        {/* </div>
                <div className="col"> */}
        <div className="col3">
          <h3>Support</h3>
          <p className="footerp2">Help center</p>
          <p className="footerp2">Terms of service </p>
          <p className="footerp2">Legal</p>
          <p className="footerp2">Privacy policy</p>
        </div>
      </div>
      {/* </div> */}
      <div className="second">
        <div className="footerp1">
          <p>CrpytoKet, Inc. All Rights Reserved</p>
        </div>
        <div>
          <div className="socialmedia">
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaTelegramPlane />
            </div>
            <div>
              <FaDiscord />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
