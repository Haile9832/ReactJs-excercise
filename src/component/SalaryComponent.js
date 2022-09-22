import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

function Salary({ salary, salaryLoading, salaryErrMess }) {
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
        {(salaryLoading && (
          <div className="container">
            <div className="row">
              <Loading />
            </div>
          </div>
        )) ||
          (salaryErrMess && (
            <div className="container">
              <div className="row">
                <h4>{salaryErrMess}</h4>
              </div>
            </div>
          )) ||
          salary.map((salary) => {
            return (
              <div key={salary.id} className="col-md-4 col-sm-6 col-12">
                <div className="border m-2">
                  <h1 className="ps-1">{salary.name}</h1>
                  <div className="ps-3">
                    <p>Mã nhân viên: {salary.id}</p>
                    <p>Hệ số lương: {salary.salaryScale}</p>
                    <p>Số ngày làm thêm: {salary.overTime}</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="border p-3">Lương: {salary.salary}</p>
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
