import React, { useState } from "react";
import { Link } from "react-router-dom";
import StaffAdd from "./StaffAddComponent";
import { Loading } from "./LoadingComponent";

const StaffList = ({ staffs, staffsLoading, staffsErrMess, postStaff }) => {
  const [searchValue, setSearchValue] = useState("");
  const [valueSearch, setValueSearch] = useState("");
  const handleSearch = () => {
    setValueSearch(searchValue.toLowerCase());
  };
  return (
    <div className="container mt-1">
      <div className="row">
        <div className="d-flex flex-wrap border-bottom pb-3">
          <StaffAdd postStaff={postStaff} />
          <div className="d-flex col-12 col-md-6 justify-content-between mt-1 mt-md-0">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="rounded col-9"
            />
            <button
              className="rounded btn btn-primary col-2"
              onClick={handleSearch}
            >
              Tìm
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        {(staffsLoading && (
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
          staffs
            .filter((staff) => {
              if (staff?.name?.toLowerCase().includes(valueSearch)) {
                return true;
              }
              return false;
            })
            .map((staff) => {
              return (
                <div className="col-6 col-md-4 col-lg-2 mt-3" key={staff.id}>
                  <Link
                    to={`/stafflist/${staff.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <div className="d-flex flex-column justify-content-center align-items-center border">
                      <img src="./assets/images/alberto.png" width="100%" />
                      {staff.name}
                    </div>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default StaffList;
