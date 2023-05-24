import React from 'react'
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import "../../stylesheets/Layout/Footer.css"
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div>
             <footer id="footer text-white text-center">
        <div className="container">
          <div className="row pt-5 poppins">
            <div className="col-sm-4 col-12">
              <h5 className="footerparahead poppins f-20 text-white mb-3">
                <b>More To Explore</b>
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                <a href={"https://www.makeroadssafe.org/blog/"} className="text-decoration-none">
                    <p className="poppins f-14 text-white mb-0 fw-light">
                    Road health safety
                    </p>
                </a>
                </li>
                <li className="nav-item mb-2">
                <a href={"https://www.cholainsurance.com/knowledge-center/blogs/5-top-causes-of-road-accident"} className="text-decoration-none">
                    <p className="poppins f-14 text-white mb-0 fw-light">
                    Risk factors for increasing accidents
                    </p>
                </a>
                </li>
                <li className="nav-item mb-2">
                <a href={"https://www.geico.com/information/safety/auto/teendriving/top-ten-tips/"} className="text-decoration-none">
                    <p className="poppins f-14 text-white mb-0 fw-light">
                    Ways to avoid or reduce accidents
                    </p>
                </a>
                </li>
               
              </ul>
            </div>
            <div className="col-sm-4 col-12">
              <h5 className="footerparahead poppins f-20 text-white mb-3">
                <b>Quick Links</b>
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/accidents" className="text-decoration-none">
                  <p className="poppins f-14 text-white mb-0 fw-light">
                    Accidents
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/analysis" className="text-decoration-none">
                  <p className="poppins f-14 text-white mb-0 fw-light">
                  Analysis
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/markaccidents" className="text-decoration-none">
                  <p className="poppins f-14 text-white mb-0 fw-light">
                  Mark an Accident
                    </p>
                  </Link>
                </li>               
              </ul>
            </div>          
            <div className="col-sm-4 col-12">
            <h5 className="footerparahead text-white">
                <b>You Are Visitor Number<br/><span className="f-30">5462132</span> </b>
                <p className="footerparahead" id="iconsize">
                <ImLinkedin2 />&nbsp;&nbsp;
                <BsTwitter />&nbsp;&nbsp;
                <ImFacebook/>&nbsp;&nbsp;
              </p>
              </h5>            
            </div>           
          </div>
          <hr className="text-white opacity:1"/>
          <div className="row">
            <div className="col sm">
              <p className="footerparahead text-center text-white">
              © 2022 OrganiCod3rs. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )
}
