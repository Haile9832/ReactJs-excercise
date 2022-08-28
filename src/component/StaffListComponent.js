import React, { useState } from "react";
import { Link } from "react-router-dom";

function StaffList({ staffs }) {
  const [searchValue, setSearchValue] = useState("");
  const [valueSearch, setValueSearch] = useState("");
  const handleSearch = () => {
    setValueSearch(searchValue.toLowerCase());
  };
  console.log(searchValue);
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-end">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="me-3 rounded"
          />
          <button className="rounded" onClick={handleSearch}>
            Tìm kiếm
          </button>
        </div>
      </div>
      <div className="row">
        {staffs
          .filter((staff) => {
            if (staff.name.toLowerCase().includes(valueSearch)) {
              return true;
            } else return false;
          })
          .map((staff) => (
            <div className="col-6 col-md-4 col-lg-2 mt-3" key={staff.id}>
              <Link to={`/stafflist/${staff.id}`}>
                <div className="d-flex flex-column justify-content-center align-items-center border">
                  <img src="./assets/images/alberto.png" width="100%" />
                  {staff.name}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default StaffList;
