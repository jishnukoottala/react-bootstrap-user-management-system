import React from "react";
import User from "./User";

const UsersList = props => {
  return (
    <div className="container d-md-flex">
      {props.users.map(user => (
        <User user={user} />
      ))}
    </div>
  );
};

export default UsersList;
