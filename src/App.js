import Header from "./component/HeaderComponent";
import StaffList from "./component/StaffListComponent";
import StaffDetail from "./component/StaffdetailComponent";
import Department from "./component/DepartmentComponent";
import Salary from "./component/SalaryComponent";
import Footer from "./component/FooterComponent";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  };
};
function App(props) {
  const StaffWithId = () => {
    const { staffId } = useParams();
    return (
      <StaffDetail
        selectedStaff={
          props.staffs.filter((staff) => staff.id === Number(staffId))[0]
        }
      />
    );
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/stafflist"
          element={<StaffList staffs={props.staffs} />}
        />
        <Route path="/stafflist/:staffId" element={<StaffWithId />} />
        <Route
          path="/department"
          element={<Department departments={props.departments} />}
        />
        <Route path="/salary" element={<Salary staffs={props.staffs} />} />
        <Route path="*" element={<Navigate to="/stafflist" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps)(App);
