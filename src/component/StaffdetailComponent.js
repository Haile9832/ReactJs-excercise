import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function StaffDetail({ selectedStaff }) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/stafflist">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{selectedStaff.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-6 col-sm-4 col-md-3">
          <img src={selectedStaff.image} width="100%" />
        </div>
        <div className="col-6 col-sm-4 col-md-9">
          <h4>Họ và tên: {selectedStaff.name}</h4>
          <p>Ngày sinh: {dateFormat(selectedStaff.doB, "dd/mm/yyyy")}</p>
          <p>
            Ngày vào công ty:{" "}
            {dateFormat(selectedStaff.startDate, "dd/mm/yyyy")}
          </p>
          <p>Phòng ban: {selectedStaff.department.name}</p>
          <p>Số ngày nghỉ còn lại: {selectedStaff.annualLeave}</p>
          <p>Số ngày đã làm thêm: {selectedStaff.overTime}</p>
        </div>
      </div>
    </div>
  );
}

export default StaffDetail;
