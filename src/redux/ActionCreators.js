import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));
  return fetch(baseUrl + "staffs")
    .then((response) => response.json())
    .then((staffs) => dispatch(addStaffs(staffs)));
};
export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});

export const staffsFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess,
});

export const staffPosted = (staff) => ({
  type: ActionTypes.STAFF_POSTED,
  payload: staff,
});
export const staffDeleted = (staff) => ({
  type: ActionTypes.STAFF_DELETED,
  payload: staff,
});
export const staffPatched = (staff) => ({
  type: ActionTypes.STAFF_PATCHED,
  payload: staff,
});
export const postStaff =
  (name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) =>
  (dispatch) => {
    const newStaff = {
      name: name,
      doB: doB,
      salaryScale: salaryScale,
      startDate: startDate,
      departmentId: departmentId,
      annualLeave: annualLeave,
      overTime: overTime,
    };
    newStaff.image = "/assets/images/alberto.png";
    return fetch(baseUrl + "staffs", {
      method: "POST",
      body: JSON.stringify(newStaff),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => dispatch(staffPosted(response)))
      .catch((error) => {
        console.log("post staffs", error.message);
        alert("Your staffs could not be posted\nError: " + error.message);
      });
  };
export const deleteStaff = (id) => (dispatch) => {
  return fetch(baseUrl + "staffs" + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(staffDeleted(response)))
    .catch((error) => {
      console.log("Delete Staff", error.message);
      alert("Your staff could not be deleted\nError: " + error.message);
    });
};
export const patchStaff =
  (
    id,
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime
  ) =>
  (dispatch) => {
    const newStaff = {
      id: id,
      name: name,
      doB: doB,
      salaryScale: salaryScale,
      startDate: startDate,
      departmentId: departmentId,
      annualLeave: annualLeave,
      overTime: overTime,
    };
    return fetch(baseUrl + "staffs", {
      method: "PATCH",
      body: JSON.stringify(newStaff),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => dispatch(staffPatched(response)))
      .catch((error) => {
        console.log("Patch Staff", error.message);
        alert("Your staff could not be Patch\nError: " + error.message);
      });
  };

export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading(true));
  return fetch(baseUrl + "departments")
    .then((response) => response.json())
    .then((departments) => dispatch(addDepartments(departments)));
};
export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTMENTS_LOADING,
});
export const addDepartments = (departments) => ({
  type: ActionTypes.ADD_DEPARTMENTS,
  payload: departments,
});
export const departmentsFailed = (errmess) => ({
  type: ActionTypes.DEPARTMENTS_FAILED,
  payload: errmess,
});

export const fetchSalary = () => (dispatch) => {
  dispatch(salaryLoading(true));
  return fetch(baseUrl + "staffsSalary")
    .then((response) => response.json())
    .then((salary) => dispatch(addSalary(salary)));
};
export const salaryLoading = () => ({
  type: ActionTypes.SALARY_LOADING,
});
export const addSalary = (salary) => ({
  type: ActionTypes.ADD_SALARY,
  payload: salary,
});
export const salaryFailed = (errmess) => ({
  type: ActionTypes.SALARY_FAILED,
  payload: errmess,
});
