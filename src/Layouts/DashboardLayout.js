import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";
import Footer from "../Pages/Shared/Footer/Footer";
import Menubar from "../Pages/Shared/Menubar/Menubar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);

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
            {isAdmin && (
              <ul className="menu p-4 w-80 bg-secondary my-4 rounded-xl text-base-content">
                <li className="my-2">
                  <NavLink
                    to="/dashboard/allsellers"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-success text-secondary rounded font-medium flex justify-center"
                        : "btn btn-outline btn-success text-accent flex justify-center"
                    }
                  >
                    ALL SELLERS
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    to="/dashboard/allbuyers"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-success text-secondary rounded font-medium flex justify-center"
                        : "btn btn-outline btn-success text-accent flex justify-center"
                    }
                  >
                    ALL BUYERS
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    to="/dashboard/reporteditems"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-success text-secondary rounded font-medium flex justify-center"
                        : "btn btn-outline btn-success text-accent flex justify-center"
                    }
                  >
                    REPORTED ITEMS
                  </NavLink>
                </li>
              </ul>
            )}
            {isBuyer && (
              <ul className="menu p-4 w-80 bg-secondary my-4 rounded-xl text-base-content">
                <li className="my-2">
                  <NavLink
                    to="/dashboard/myorders"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-success text-secondary rounded font-medium flex justify-center"
                        : "btn btn-outline btn-success text-accent flex justify-center"
                    }
                  >
                    MY ORDERS
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    to="/dashboard/wishlist"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-success text-secondary rounded font-medium flex justify-center"
                        : "btn btn-outline btn-success text-accent flex justify-center"
                    }
                  >
                    WISHLIST
                  </NavLink>
                </li>
              </ul>
            )}
            {isSeller && (
              <ul className="menu p-4 w-80 bg-secondary my-4 rounded-xl text-base-content">
                <li className="my-2">
                  <NavLink
                    to="/dashboard/addproducts"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-success text-secondary rounded font-medium flex justify-center"
                        : "btn btn-outline btn-success text-accent flex justify-center"
                    }
                  >
                    ADD PRODUCTS
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    to="/dashboard/myproducts"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-success text-secondary rounded font-medium flex justify-center"
                        : "btn btn-outline btn-success text-accent flex justify-center"
                    }
                  >
                    MY PRODUCTS
                  </NavLink>
                </li>
                <li className="my-2">
                  <NavLink
                    to="/dashboard/mybuyers"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-success text-secondary rounded font-medium flex justify-center"
                        : "btn btn-outline btn-success text-accent flex justify-center"
                    }
                  >
                    MY BUYERS
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
