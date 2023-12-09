import React from "react"

function Table({ EMP_Id, Name, DOB, Role }) {
  return (
    <div className="col col-sm-12 col-md-6 d-flex justify-content-center">
      <table className="" bgcolor="#595959">
        <tbody>
          <tr>
            <td className="rowName">EmpID</td>
            <td>:</td>
            <td className="white d-flex justify-content-between">
              <span>{EMP_Id}</span> <span className="circle">{EMP_Id}</span>
            </td>
          </tr>
          <tr>
            <td className="rowName">Name</td>
            <td>:</td>
            <td className="white">{Name}</td>
          </tr>
          <tr>
            <td className="rowName">DOB</td>
            <td>:</td>
            <td style={{ color: "orange" }}>{DOB}</td>
          </tr>
          <tr>
            <td className="rowName">Role</td>
            <td>:</td>
            <td style={{ color: "#36a546" }}>{Role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
