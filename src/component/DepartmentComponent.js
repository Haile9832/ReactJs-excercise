import React from "react";

function Department({ departments }) {
  return (
    <div className="container">
      <div className="row">
        {departments.map((department) => (
          <div className="col-md-4 col-sm-6 col-12" key={department.id}>
            <div className="d-flex flex-column justify-content-center align-items-center border m-2">
              <h3>{department.name}</h3>
              <div>{department.numberOfStaff}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Department;
