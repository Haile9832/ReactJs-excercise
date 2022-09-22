import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { Loading } from "./LoadingComponent";
import { Modal } from "react-bootstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { useNavigate } from "react-router-dom";

function StaffDetail({
  staffs,
  staffsLoading,
  staffsErrMess,
  deleteStaff,
  patchStaff,
}) {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleDelete = () => {
    const result = window.confirm("Bạn muốn xóa nhân viên này chứ?");
    if (result) {
      deleteStaff(staffs.id);
      alert("Xóa thành công");
      navigate("stafflist");
    }
  };

  const handleSubmit = (values) => {
    const result = window.confirm("Bạn muốn cập nhật lại thông tin chứ?");
    if (result) {
      patchStaff(
        staffs.id,
        values.name,
        values.dob,
        values.salary,
        values.startdate,
        values.department,
        values.annualleave,
        values.overtime
      );
      alert("Cập nhật thành công");
    }
    toggleModal();
  };
  const handlePatch = () => {
    toggleModal();
  };
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) =>
    !(val && val.length) || (val && val.length >= len);

  return (
    (staffsLoading && (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    )) ||
    (staffsErrMess && (
      <div className="container">
        <div className="row">
          <h4>{staffsErrMess}</h4>
        </div>
      </div>
    )) ||
    (staffs && (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/stafflist">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{staffs.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3">
            <img src={staffs.image} width="100%" />
          </div>
          <div className="col-6 col-sm-4 col-md-9">
            <h4>Họ và tên: {staffs.name}</h4>
            <p>Ngày sinh: {dateFormat(staffs.doB, "dd/mm/yyyy")}</p>
            <p>
              Ngày vào công ty: {dateFormat(staffs.startDate, "dd/mm/yyyy")}
            </p>
            <p>
              Phòng ban:{" "}
              {(staffs.departmentId === "Dept01" && "Sale") ||
                (staffs.departmentId === "Dept02" && "Hr") ||
                (staffs.departmentId === "Dept03" && "Marketing") ||
                (staffs.departmentId === "Dept04" && "IT") ||
                (staffs.departmentId === "Dept05" && "Finance")}
            </p>
            <p>Số ngày nghỉ còn lại: {staffs.annualLeave}</p>
            <p>Số ngày đã làm thêm: {staffs.overTime}</p>
            <button
              className="rounded btn btn-primary col-4 col-sm-4 col-md-2"
              onClick={handlePatch}
            >
              Sửa
            </button>{" "}
            <button
              className="rounded btn btn-primary col-4 col-sm-4 col-md-2"
              onClick={handleDelete}
            >
              Xóa
            </button>
          </div>
        </div>

        <Modal show={modalOpen} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Sửa Thông tin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LocalForm onSubmit={(values) => handleSubmit(values)}>
              <Row className="form-group mt-2">
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    className="form-control"
                    defaultValue={staffs.name}
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                      minLength: "Yêu cầu nhiều hơn 2 ký tự",
                      maxLength: "Yêu cầu ít hơn 30 ký tự",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Label htmlFor="dob" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Control.input
                    type="date"
                    model=".dob"
                    id="dob"
                    name="dob"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".dob"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Label htmlFor="startdate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Control.input
                    type="date"
                    model=".startdate"
                    id="startdate"
                    name="startdate"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".startdate"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>
                <Col md={8}>
                  <Control.select
                    model=".department"
                    id="department"
                    name="department"
                    className="form-control"
                    defaultValue={staffs.departmentId}
                  >
                    <option value="Dept01">Sale</option>
                    <option value="Dept02">Hr</option>
                    <option value="Dept03">Marketing</option>
                    <option value="Dept04">IT</option>
                    <option value="Dept05">Finance</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Label htmlFor="salary" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Control.input
                    type="number"
                    model=".salary"
                    name="salary"
                    id="salary"
                    className="form-control"
                    defaultValue={staffs.salaryScale}
                  />
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Label htmlFor="annualleave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Control.input
                    type="number"
                    model=".annualleave"
                    name="annualleave"
                    id="annualleave"
                    className="form-control"
                    defaultValue={staffs.annualLeave}
                  />
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Label htmlFor="overtime" md={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={8}>
                  <Control.input
                    type="number"
                    model=".overtime"
                    name="overtime"
                    id="overtime"
                    className="form-control"
                    defaultValue={staffs.overTime}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Xác nhận
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </Modal.Body>
        </Modal>
      </div>
    ))
  );
}

export default StaffDetail;
