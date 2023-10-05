import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import person from "../assets/person.svg";

const User = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((user) => user.id === parseInt(id));
  const { name, email, role } = existingUser[0];

  return (
    <>
      <div className="card">
        <img src={person} alt="img" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">
            <li>E-mail: {email}</li>
            <li>Role: {role}</li>
          </p>
          <Link to="/" className="btn btn-primary">
            Go to DashBoard
          </Link>
        </div>
      </div>
    </>
  );
};

export default User;
