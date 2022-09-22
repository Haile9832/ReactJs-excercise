import Header from "./component/HeaderComponent";
import StaffList from "./component/StaffListComponent";
import StaffDetail from "./component/StaffdetailComponent";
import Department from "./component/DepartmentComponent";
import DepartmentDetail from "./component/DepartmentDetailComponent";
import Salary from "./component/SalaryComponent";
import Footer from "./component/FooterComponent";
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import {
  fetchStaffs,
  fetchDepartments,
  fetchSalary,
  postStaff,
  deleteStaff,
  patchStaff,
} from "./redux/ActionCreators";
import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    salary: state.salary,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchSalary: () => {
    dispatch(fetchSalary());
  },
  postStaff: (
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime
  ) =>
    dispatch(
      postStaff(
        name,
        doB,
        salaryScale,
        startDate,
        departmentId,
        annualLeave,
        overTime
      )
    ),
  deleteStaff: (id) => dispatch(deleteStaff(id)),
  patchStaff: (
    id,
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime
  ) =>
    dispatch(
      patchStaff(
        id,
        name,
        doB,
        salaryScale,
        startDate,
        departmentId,
        annualLeave,
        overTime
      )
    ),
});

function App(props) {
  useEffect(() => {
    console.log("fetchStaff");
    props.fetchStaffs();
  }, []);
  useEffect(() => {
    props.fetchDepartments();
    props.fetchSalary();
  }, [props.staffs.staffs]);
  const StaffWithId = () => {
    const { staffId } = useParams();
    return (
      <StaffDetail
        staffs={
          props.staffs.staffs.filter((staff) => staff.id === Number(staffId))[0]
        }
        staffsLoading={props.staffs.isLoading}
        staffsErrMess={props.staffs.errMess}
        deleteStaff={props.deleteStaff}
        patchStaff={props.patchStaff}
        departments={props.departments.departments}
      />
    );
  };
  const DepartmentWithId = () => {
    const { departmentId } = useParams();
    return (
      <DepartmentDetail
        staffs={props.staffs.staffs.filter(
          (staff) => staff.departmentId === departmentId
        )}
      />
    );
  };
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={300}
        >
          <Routes location={location}>
            <Route
              path="/stafflist"
              element={
                <StaffList
                  staffs={props.staffs.staffs}
                  staffsLoading={props.staffs.isLoading}
                  staffsErrMess={props.staffs.errMess}
                  postStaff={props.postStaff}
                  fetchDepartments={props.fetchDepartments}
                />
              }
            />
            <Route path="/stafflist/:staffId" element={<StaffWithId />} />
            <Route
              path="/department"
              element={
                <Department
                  departments={props.departments.departments}
                  departmentsLoading={props.departments.isLoading}
                  departmentsErrMess={props.departments.errMess}
                />
              }
            />
            <Route
              path="/department/:departmentId"
              element={<DepartmentWithId />}
            />
            <Route
              path="/salary"
              element={
                <Salary
                  salary={props.salary.salary}
                  salaryLoading={props.salary.isLoading}
                  salaryErrMess={props.salary.errMess}
                />
              }
            />
            <Route path="*" element={<Navigate to="/stafflist" replace />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
