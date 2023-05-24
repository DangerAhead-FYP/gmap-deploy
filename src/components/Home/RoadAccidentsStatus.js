import React from "react";
import acc1 from "../../images/acc1.png";
import acc2 from "../../images/acc2.png";
import acc3 from "../../images/acc3.png";
import "../../stylesheets/Home/RoadAccidentsStatus.css"
export default function RoadAccidentsStatus(){
  return (
    <>
      <section id="appbody" className="py-5">
        <h3 className="text-center poppins f-50 mb-5">Road Accidents Status</h3>
        <div className="container">
          <div className="row">
            <div className="accstatus-col col-lg-4 col-12">
              <div className="card">
                <div className="card-img" style={{"backgroundColor":"#eac95f"}}>
                    <center>
                        <img src={acc3} alt="Logo" className="accstatuspic"/>
                    </center>
                     
                </div>
                <div className="card-body">
                  <h5 className="card-title f-20">Why Road Health is important?</h5>
                  <br/>
                  <p className="card-text habibi grey f-14">
                  Road health directly impacts the safety of drivers, passengers, pedestrians, and cyclists. Well-maintained roads reduce the risk of accidents, injuries, and fatalities.
                  </p>
                  <p className="card-text habibi grey f-14">
                  Well-maintained roads contribute to smoother traffic flow, reducing congestion, travel times, and delays. This enhances overall transportation efficiency, enabling people .
                  </p>
                  <p className="card-text habibi grey f-14">
                  Poor road conditions can negatively impact public health. Inadequate infrastructure, such as potholes and uneven surfaces, can cause accidents, injuries, and long-term health issues. 
                  </p>
                </div>
              </div>
            </div>
            <div className="accstatus-col col-lg-4 col-12">
              <div className="card">
                <div className="card-img" style={{"backgroundColor":"#e6702da3"}}>
                    <center>
                        <img src={acc1} alt="Logo" className="accstatuspic"/>
                    </center>
                     
                </div>
                <div className="card-body">
                  <h5 className="card-title f-20">Risk factors for increasing accidents</h5>
                  <br/>
                  <p className="card-text habibi grey f-14">
                  The use of electronic devices, such as smartphones, while driving, diverts attention from the road and increases the risk of accidents.</p>
                  <p className="card-text habibi grey f-14">
                  Driving above the speed limit or too fast for the prevailing road and weather conditions reduces the driver's ability to react to unexpected situations and increases the severity of accidents.
                  </p>
                  <p className="card-text habibi grey f-14">
                  Poor road design, lack of proper signage, absence of lighting, and insufficient maintenance contribute to accidents. 
                  </p>
                </div>
              </div>
            </div>
            <div className="accstatus-col col-lg-4 col-12">
              <div className="card">
                <div className="card-img" style={{"backgroundColor":"#e6432da3"}}>
                    <center>
                        <img src={acc2} alt="Logo" className="accstatuspic"/>
                    </center>
                     
                </div>
                <div className="card-body">
                  <h5 className="card-title f-20">Steps to avoid accidents</h5>
                  <br/>
                  <p className="card-text habibi grey f-14">
                  Keep your attention on the road and avoid distractions such as using electronic devices.Adhere to traffic regulations, including obeying traffic signals, and road signs. 
                  </p>
                  <p className="card-text habibi grey f-14">
                  Keep a safe distance from the vehicle ahead of you.Stay calm and patient behind the wheel, refraining from aggressive behaviors such as tailgating, excessive speeding, or erratic lane changes. Show respect and consideration for other road users.
                  </p>
                  <p className="card-text habibi grey f-14">
                  Adjust your driving to suit the current weather conditions, such as rain, snow, fog, or ice.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
