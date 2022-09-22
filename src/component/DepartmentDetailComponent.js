import React from "react";
import { Link } from "react-router-dom";

function DepartmentDetail({ staffs }) {
  return (
    <div className="container mt-1">
      <div className="row">
        {staffs.map((staff) => (
          <div className="col-6 col-md-4 col-lg-2 mt-3" key={staff.id}>
            <Link to={`/stafflist/${staff.id}`}>
              <div className="d-flex flex-column justify-content-center align-items-center border">
                <img src={staff.image} width="100%" />
                {staff.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentDetail;
