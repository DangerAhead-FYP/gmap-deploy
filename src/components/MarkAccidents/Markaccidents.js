import React from 'react'
import Navbar from "../Layout/Navbar"
import img from "../../images/logo.png"
import "../../stylesheets/Markaccidents/Markaccidents.css"
import Footer from '../Layout/Footer'

export default function Markaccidents(props) {
  return (
    <div>
      <Navbar active={props.active}/>
          <div className="mark-acc container mb-5 pb-5">
            <div className="pt-5 text-center">
              {/* <img className="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
              <img src={img}/>
              <h2>Add an Accident </h2>
              <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
              <br/>
              <br/>
            </div>
            <form class="needs-validation" novalidate>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">Title</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                    <div class="invalid-feedback">
                      Valid title is required.
                    </div>
                  </div>
                  <div class="col-sm-6">
              <label for="lastName" class="form-label">Location</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
              <div class="invalid-feedback">
                Valid location is required.
              </div>
            </div>

                  <div class="col-12">
              <label for="username" class="form-label">Description</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="username" placeholder="" required/>
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

                  <div class="col-12">
              <label for="email" class="form-label">Cause of Accident</label>
              <input type="text" class="form-control" id="email" placeholder=""/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

                  <div class="col-12">
              <label for="address" class="form-label">Preventive Measures</label>
              <input type="text" class="form-control" id="address" placeholder="" required/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
       
            <div class="col-md-3">
              <label for="injured" class="form-label">Number of Injured</label>
              <input type="number" class="form-control" id="injured" placeholder="" required/>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div><div class="col-md-3">
              <label for="deaths" class="form-label">Number of Deaths</label>
              <input type="number" class="form-control" id="deaths" placeholder="" required/>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">Level of Accident</label>
              <select class="form-select" id="country" required>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
                <option value="very severe">Very severe</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>         

                  <div class="my-3 d-flex flex-row ">

              <p class="mb-3 col-3">Street Lights</p>
              <div className="col-3 d-flex flex-row">
              <div class="form-check">
                <input id="street-yes" name="streetlights" type="radio" class="form-check-input" checked required/>
                <label class="form-check-label" for="street-yes">Yes</label>
              </div>
              <div class="form-check">
                <input id="street-no" name="streetlights" type="radio" class="form-check-input" required/>
                <label class="form-check-label" for="street-no">No</label>
              </div>
              </div>
              <p class="mb-3 col-3">Traffic Lights</p>
              <div className="col-3 d-flex flex-row">
              <div class="form-check">
                <input id="traffic-yes" name="trafficlights" type="radio" class="form-check-input" checked required/>
                <label class="form-check-label" for="traffic-yes">Yes</label>
              </div>
              <div class="form-check">
                <input id="traffic-no" name="trafficlights" type="radio" class="form-check-input" required/>
                <label class="form-check-label" for="traffic-no">No</label>
              </div>
              </div>

              

            </div>
                  <div class="my-3 d-flex flex-row ">

              <p class="mb-3 col-3">Traffic Officer</p>
              <div className="col-3 d-flex flex-row">
              <div class="form-check">
                <input id="officer-yes" name="trafficofficer" type="radio" class="form-check-input" checked required/>
                <label class="form-check-label" for="officer-yes">Yes</label>
              </div>
              <div class="form-check">
                <input id="officer-no" name="trafficofficer" type="radio" class="form-check-input" required/>
                <label class="form-check-label" for="officer-no">No</label>
              </div>
              </div>
              <p class="mb-3 col-3">Road Conditions</p>
              <div className="col-3 d-flex flex-row">
              <div class="form-check">
                <input id="road-yes" name="roadconditions" type="radio" class="form-check-input" checked required/>
                <label class="form-check-label" for="road-yes">Good</label>
              </div>
              <div class="form-check">
                <input id="road-no" name="roadconditions" type="radio" class="form-check-input" required/>
                <label class="form-check-label" for="road-no">Poor</label>
              </div>
              </div>

              

            </div>
          </div>
      </form>
      <div className="d-flex justify-content-center">
        <button class="w-50 text-center red-btn-outline my-5" type="submit">Submit accident</button>
      </div>
      
      </div>
      <Footer/>
    </div>
  )
}
