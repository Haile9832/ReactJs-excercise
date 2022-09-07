import React, { Component } from "react";
import { LocalForm, Control, Errors } from "react-redux-form";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Label,
  Col,
  Button,
} from "reactstrap";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  handleSubmitComment(values) {
    this.toggleModal();
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }
  render() {
    return (
      <div>
        <button
          className="fa fa-pencil btn btn-default border text-muted"
          onClick={this.toggleModal}
        >
          {" Submit Comment"}
        </button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
              <Row className="form-group mt-2">
                <Label htmlFor="rating" className="fw-bold">
                  Rating
                </Label>
                <Col>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Label htmlFor="name" className="fw-bold">
                  Your Name
                </Label>
                <Col>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="Your Name"
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
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Label htmlFor="comment" className="fw-bold">
                  Your Comment
                </Label>
                <Col>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CommentForm;
