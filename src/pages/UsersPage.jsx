import React from "react";
import FirstName from "../components/FirstName";
import LastName from "../components/LastName";
import { useDispatch } from "react-redux";
import { setFirstName, setLastName } from "../features/user/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <h1>Redux Toolkit State Change</h1>
      <div>
        <input
          type="text"
          placeholder="First Name"
          className=""
          onChange={(e) => {
            dispatch(setFirstName(e.target.value));
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          className=""
          onChange={(e) => {
            dispatch(setLastName(e.target.value));
          }}
        />
      </div>

      <div className="">
        <div>
          <p>First Name:</p>
          <FirstName />
        </div>

        <div>
          <p>Last Name:</p>
          <LastName />
        </div>
      </div>
    </div>
  );
};

export default Users;
