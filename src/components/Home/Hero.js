import React from 'react'
import "../../stylesheets/Home/Hero.css"
import hero_img from "../../images/hero-img.png"
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
        <div className="">
            <div className="hero row flex-lg-row align-items-center py-3 w-100">
            <div className="col-text col-lg-6 col-12">
                <h1 className="poppins f-50 lh-1 mb-3">Aiming for <br/>
                Acci-less Roads</h1>
                <p className="habibi grey f-14">Stay Alert, Stay Safe: Prevent Accidents Today, Ensure a Brighter Tomorrow.<br/>Cutting-edge software that analyzes real-time data, predicts risks, and proactively prevents accidents, keeping you and your team safe</p>
                <Link to="/accidents">
                <button type="button" className="button red-btn">Get Started</button>
                </Link>
                
            </div>
            <div className="col-img col-lg-6 col-12">
                <img className='hero-img' src={hero_img} alt="danger-ahead-logo"/>
            </div>
            </div>
        </div>
    </div>
  )
}
