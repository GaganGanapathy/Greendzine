import React, { useState } from "react"
import logo from "../assets/Group_3.png"
import "../style/login.css"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    try {
      e.preventDefault()
      console.log("working")
      if (email === "test@gmail.com" && password === "test") {
        navigate("/home")
      } else {
        alert("Email or Password is InCorrect")
      }
    } catch (error) {
      console.log(error)
    }
  }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control p-2 mb-3 input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="p-2 button" onClick={handleSubmit}>
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
