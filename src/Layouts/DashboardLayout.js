import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Menubar from "../Pages/Shared/Menubar/Menubar";

const DashboardLayout = () => {
  return (
    <div className="bg-primary">
      <Menubar></Menubar>
      <div className="container mx-auto">
        <div className="drawer drawer-mobile bg-primary">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-success lg:mx-0 md:mx-0 sm:mx-4 mx-24 md:mt-0 sm:mt-6 mt-6 drawer-button lg:hidden"
            >
              See Options
            </label>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-secondary my-4 rounded-xl text-base-content">
              <li className="my-2">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive
                      ? "bg-success text-secondary rounded font-medium"
                      : "bg-primary text-accent"
                  }
                >
                  Item1
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-success text-secondary rounded font-medium"
                      : "bg-primary text-accent"
                  }
                >
                  Item3
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
