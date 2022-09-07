import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {
  Routes,
  Route,
  Navigate,
  useParams,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const DishWithId = () => {
      const { dishId } = useParams();

      return (
        <DishDetail
          dish={
            this.props.dishes.filter((dish) => dish.id === Number(dishId))[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === Number(dishId)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" element={<DishWithId />} />
          <Route
            path="/aboutus"
            element={<About leaders={this.props.leaders} />}
          />
          <Route path="/contactus" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
