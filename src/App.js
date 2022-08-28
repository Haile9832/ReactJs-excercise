import Header from "./component/HeaderComponent";
import StaffList from "./component/StaffListComponent";
import StaffDetail from "./component/StaffdetailComponent";
import Department from "./component/DepartmentComponent";
import Salary from "./component/SalaryComponent";
import Footer from "./component/FooterComponent";
import { STAFFS, DEPARTMENTS } from "./shared/staffs";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import "./App.css";

function App() {
  const StaffWithId = () => {
    const { staffId } = useParams();
    return (
      <StaffDetail
        selectedStaff={
          STAFFS.filter((staff) => staff.id === Number(staffId))[0]
        }
      />
    );
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/stafflist" element={<StaffList staffs={STAFFS} />} />
        <Route path="/stafflist/:staffId" element={<StaffWithId />} />
        <Route
          path="/department"
          element={<Department departments={DEPARTMENTS} />}
        />
        <Route path="/salary" element={<Salary staffs={STAFFS} />} />
        <Route path="*" element={<Navigate to="/stafflist" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
