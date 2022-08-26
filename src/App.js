import StaffList from "./component/StaffListComponent";
import { STAFFS } from "./shared/staffs";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </div>
      </Navbar>
      <StaffList staffs={STAFFS} />
    </div>
  );
}

export default App;
