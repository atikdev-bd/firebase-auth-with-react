import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="" className="btn btn-success  text-2xl">
          Rag Store
        </Link>
        <Link to="home" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="order" className="btn btn-ghost normal-case text-xl">
          Orders
        </Link>
        <Link to="register" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        <Link to="login" className="btn btn-ghost normal-case text-xl">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
