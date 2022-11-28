import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoLight from "../../../assets/logo/logoLight.png";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <React.Fragment>
      <li className="sm: text-secondary md:text-secondary lg:text-accent">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-success text-secondary rounded font-semibold text-sm"
              : "bg-secondary text-accent font-medium text-sm"
          }
        >
          HOME
        </NavLink>
      </li>
      <li className="sm: text-secondary md:text-secondary lg:text-accent">
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive
              ? "bg-success text-secondary rounded font-semibold text-sm"
              : "bg-secondary text-accent font-medium text-sm"
          }
        >
          EXPLORE PRODUCTS
        </NavLink>
      </li>
      <li className="sm: text-secondary md:text-secondary lg:text-accent">
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "bg-success text-secondary rounded font-semibold text-sm"
              : "bg-secondary text-accent font-medium text-sm"
          }
        >
          BLOG
        </NavLink>
      </li>
      {user?.uid && (
        <li className="sm: text-secondary md:text-secondary lg:text-accent">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "bg-success text-secondary rounded font-semibold text-sm"
                : "bg-secondary text-accent font-medium text-sm"
            }
          >
            DASHBOARD
          </NavLink>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="bg-secondary">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/">
            <img src={logoLight} className="w-28 h-28" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <div>
              {user?.photoURL ? (
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </div>
                  <button
                    className="btn btn-success btn-outline"
                    onClick={handleLogOut}
                  >
                    <Link>LOG OUT</Link>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    className="btn btn-success btn-outline"
                    onClick={handleLogOut}
                  >
                    <Link>LOG OUT</Link>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="btn btn-success btn-outline">
              <Link to="/login">LOGIN</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
