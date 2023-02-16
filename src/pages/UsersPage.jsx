import React from "react";
import FirstName from "../components/FirstName";
import LastName from "../components/LastName";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../features/user/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1 className="header">Redux Toolkit State Change</h1>
      <div className="names">
        <div className="inputs">
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

        <div className="text">
          <div className="box">
            <p>First Name:</p>
            <FirstName />
          </div>

          <div className="box">
            <p>Last Name:</p>
            <LastName />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
