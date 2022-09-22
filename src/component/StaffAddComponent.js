import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

function StaffAdd({ postStaff }) {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleSubmit = (values) => {
    toggleModal();
    postStaff(
      values.name,
      values.dob,
      values.salary,
      values.startdate,
      values.department,
      values.annualleave,
      values.overtime
    );
  };
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) =>
    !(val && val.length) || (val && val.length >= len);
  return (
    <div className="d-flex col-12 col-md-6 justify-content-between justify-content-md-start">
      <h2 className="">Nhân Viên</h2>
      <button
        className="rounded btn btn-dark col-2 ms-md-5"
        onClick={toggleModal}
      >
        <i className="fa fa-plus"></i>
      </button>
      <Modal show={modalOpen} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm Nhân Viên</Modal.Title>
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
                  defaultValue="Dept01"
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
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Thêm
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StaffAdd;
