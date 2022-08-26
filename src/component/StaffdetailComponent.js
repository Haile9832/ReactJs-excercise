import React from "react";
import dateFormat from "dateformat";
function StaffDetail({ selectedStaff }) {
  return (
    <div className="mt-3 border border-dark rounded col-12 col-md-6 col-lg-4">
      <h4>Họ và tên: {selectedStaff.name}</h4>
      <p>Ngày sinh: {dateFormat(selectedStaff.doB, "dd/mm/yyyy")}</p>
      <p>
        Ngày vào công ty: {dateFormat(selectedStaff.startDate, "dd/mm/yyyy")}
      </p>
      <p>Phòng ban: {selectedStaff.department.name}</p>
      <p>Số ngày nghỉ còn lại: {selectedStaff.annualLeave}</p>
      <p>Số ngày đã làm thêm: {selectedStaff.overTime}</p>
    </div>
  );
}

export default StaffDetail;
