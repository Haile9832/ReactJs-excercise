import React, { useState } from "react";
import StaffDetail from "./StaffdetailComponent";

function StaffList({ staffs }) {
  const [selectedStaff, setSelectedStaff] = useState();
  return (
    <div className="container">
      <div className="row">
        {staffs.map((staff) => (
          <div
            className=" col-12 col-md-6 col-lg-4 mt-3"
            onClick={() => setSelectedStaff(staff)}
            key={staff.id}
          >
            <div
              className="p-3 border border-dark rounded d-flex 
          justify-content-center"
            >
              {staff.name}
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {selectedStaff ? (
          <StaffDetail selectedStaff={selectedStaff} />
        ) : (
          <p className="mt-3">Bấm vào tên nhân viên để xem thông tin</p>
        )}
      </div>
    </div>
  );
}

export default StaffList;
