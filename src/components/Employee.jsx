import React, { useState } from "react"
import "../style/employee.css"
import "../style/login.css"
import customer from "../assets/Group_46.png"
import moto from "../assets/moptro_logo.png"
import Table from "./Table"
import Tab from "./Tab"

function Employee() {
  const fakeData = [
    {
      EMP_Id: 1,
      Name: "Arjun",
      DOB: "16-11-2000",
      Role: "Software Developer"
    },
    {
      EMP_Id: 2,
      Name: "Ankit",
      DOB: "12-09-2000",
      Role: "web Developer"
    },
    {
      EMP_Id: 3,
      Name: "Sanjit",
      DOB: "10-03-2004",
      Role: "Tester"
    },
    {
      EMP_Id: 4,
      Name: "Indu",
      DOB: "06-02-2012",
      Role: "Quanlity Assurance"
    }
  ]
  const [phrase, setPhrase] = useState("")
  const [userInfo, setUserInfo] = useState(fakeData)

  let data
  if (phrase) {
    data = userInfo.filter((item) => {
      return item.Name.toLowerCase().includes(phrase)
    })
    console.log(data)
  } else {
    data = userInfo
  }
  return (
    <div className="background">
      <div className="container">
        <div className="d-flex justify-content-end pt-3">
          <img src={customer} alt="" />
        </div>
        <div className="d-flex justify-content-center mb-4">
          <img src={moto} alt="" />
        </div>
        <div>
          <div className="input-group mb-3 py-2 px-3">
            <input
              type="text"
              className="form-control border border-end-0 search py-2"
              placeholder="Search with name"
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
            />
            <span
              className="input-group-text border border-start-0 search me-3"
              id="basic-addon2"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
        <div className="row row-gap-2">
          {data.map((item) => {
            return <Table {...item} key={item.EMP_Id} />
          })}
        </div>
      </div>
      <Tab />
    </div>
  )
}

export default Employee
