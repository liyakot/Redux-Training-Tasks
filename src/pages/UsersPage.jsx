import React from "react";
import FirstName from "../components/FirstName";
import LastName from "../components/LastName";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../features/user/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="header">Redux Toolkit State Change</h1>
      <div className="names_inputs">
        <input
          type="text"
          placeholder="First Name"
          className="input"
          onChange={(e) => {
            dispatch(setFirstName(e.target.value));
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input"
          onChange={(e) => {
            dispatch(setLastName(e.target.value));
          }}
        />
      </div>

      <div className="names">
        <div className="names_box">
          <p>First Name:</p>
          <FirstName />
        </div>

        <div className="names_box">
          <p>Last Name:</p>
          <LastName />
        </div>
      </div>
    </div>
  );
};

export default Users;
