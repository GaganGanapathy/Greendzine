import React from "react"
import logo from "../assets/Group_3.png"
import "../style/login.css"

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center background">
      <div>
        <div className="text-center" style={{ marginBottom: "2rem" }}>
          <img src={logo} alt="" />
          <p style={{ color: "#36A546CC" }}>#We are Electric</p>
        </div>
        <div>
          <form>
            <input
              type="email"
              className="form-control p-2 mb-3 input"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control p-2 mb-3 input"
              placeholder="Password"
            />
            <button type="submit" className="p-2 button">
              Login
            </button>
          </form>
          <p className="forgot_password text-center m-4">Forgot Password?</p>
        </div>
      </div>
    </div>
  )
}

export default Login
