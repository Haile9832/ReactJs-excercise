import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function Salary({ staffs }) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/stafflist">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        {staffs.map((staff) => {
          const salary = (
            staff.salaryScale * 3000000 +
            staff.overTime * 200000
          ).toFixed(0);
          return (
            <div key={staff.id} className="col-md-4 col-sm-6 col-12">
              <div className="border m-2">
                <h1 className="ps-1">{staff.name}</h1>
                <div className="ps-3">
                  <p>Mã nhân viên: {staff.id}</p>
                  <p>Hệ số lương: {staff.salaryScale}</p>
                  <p>Số ngày làm thêm: {staff.overTime}</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <p className="border p-3">Lương: {salary}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Salary;
