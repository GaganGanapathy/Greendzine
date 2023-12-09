import React from "react"
import "../style/tab.css"
import { Link } from "react-router-dom"

function Tab() {
  return (
    <div className="fixed-bottom container">
      <div className="row bottomTab py-3">
        <div className="col-6  text-center">
          <Link to="/home">
            <i className="fa-solid fa-house icon fs-2"></i>
          </Link>
        </div>
        <div className="col-6  text-center">
          <Link to="/user">
            <i className="fa-solid fa-user icon fs-2"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Tab
