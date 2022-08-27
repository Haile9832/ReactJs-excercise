import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import dateFormat from "dateformat";

function RenderDish(props) {
  return (
    <Card>
      <CardImg top src={props.dish.image} alt={props.dish.name} />
      <CardBody>
        <CardTitle>{props.dish.name}</CardTitle>
        <CardText>{props.dish.description}</CardText>
      </CardBody>
    </Card>
  );
}
function RenderComments({ comment }) {
  return (
    <div>
      <p>{comment.comment}</p>
      <p>
        --{comment.author}, {dateFormat(comment.date, "mmmm d, yyyy")}
      </p>
    </div>
  );
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 mt-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 mt-1">
            <h4>Comments</h4>
            {props.dish.comments.map((comment) => (
              <RenderComments comment={comment} key={comment.id} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
