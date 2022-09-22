import React from "react";
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";

function Department({ departments, departmentsLoading, departmentsErrMess }) {
  return (
    <div className="container">
      <div className="row">
        {(departmentsLoading && (
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        )) ||
          departmentsErrMess &
          (
            <div className="container">
              <div className="row">
                <h4>{departmentsErrMess}</h4>
              </div>
            </div>
          ) ||
          departments.map((department) => (
            <div className="col-md-4 col-sm-6 col-12" key={department.id}>
              <Link to={`${department.id}`} style={{ textDecoration: "none" }}>
                <div className="d-flex flex-column justify-content-center align-items-center border m-2">
                  <h3>{department.name}</h3>
                  <div>{department.numberOfStaff}</div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Department;
