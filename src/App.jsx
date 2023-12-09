import Login from "./components/Login"
import Home from "./components/Home"
import Employee from "./components/Employee"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route exact path="/home" Component={Home} />
        <Route exact path="/user" Component={Employee} />
      </Routes>
    </Router>
  )
}

export default App
