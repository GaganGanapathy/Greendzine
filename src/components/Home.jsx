import React from "react"
import "../style/home.css"
import "../style/login.css"
import customer from "../assets/Group_46.png"
import moto from "../assets/moptro_logo.png"
import Tab from "./Tab"

function Home() {
  return (
    <div className="background">
      <div className="container">
        <div className="d-flex justify-content-end pt-3">
          <img src={customer} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <img src={moto} alt="" />
        </div>
        <div className="mt-5 home_background pb-3">
          <p className="text-center">Employee Productivity Dashboard</p>
          <div className="mx-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="productivity">Productivity on Monday</span>
              <span className="percentage">4%</span>
            </div>
            <div className="progress" role="progressbar">
              <div className="progress-bar" style={{ width: "2%" }}></div>
            </div>
          </div>
          <div className="mx-3 mt-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="productivity">Productivity on Tuesday</span>
              <span className="percentage">92%</span>
            </div>
            <div className="progress" role="progressbar">
              <div className="progress-bar" style={{ width: "46%" }}></div>
            </div>
          </div>
          <div className="mx-3 mt-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="productivity">Productivity on Wednesday</span>
              <span className="percentage">122%</span>
            </div>
            <div className="progress" role="progressbar">
              <div className="progress-bar" style={{ width: "61%" }}></div>
            </div>
          </div>
          <div className="mx-3 mt-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="productivity">Productivity on Thrusday</span>
              <span className="percentage">93%</span>
            </div>
            <div className="progress" role="progressbar">
              <div className="progress-bar" style={{ width: "46%" }}></div>
            </div>
          </div>
          <div className="mx-3 mt-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="productivity">Productivity on Friday</span>
              <span className="percentage">89%</span>
            </div>
            <div className="progress" role="progressbar">
              <div className="progress-bar" style={{ width: "45%" }}></div>
            </div>
          </div>
          <div className="m-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="productivity">Productivity on Saturday</span>
              <span className="percentage">98%</span>
            </div>
            <div className="progress" role="progressbar">
              <div className="progress-bar" style={{ width: "49%" }}></div>
            </div>
          </div>
        </div>
      </div>
      <Tab />
    </div>
  )
}

export default Home
