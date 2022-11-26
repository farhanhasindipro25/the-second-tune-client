import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Wishlist from "../../Pages/Dashboard/Wishlist/Wishlist";
import Home from "../../Pages/Home/Home/Home";
import Categories from "../../Pages/Products/Categories/Categories";
import Login from "../../Pages/UserRegistration/Login/Login";
import Signup from "../../Pages/UserRegistration/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/products",
        element: <Categories></Categories>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/addproducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/mybuyers",
        element: <MyBuyers></MyBuyers>,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/reporteditems",
        element: <ReportedItems></ReportedItems>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
]);

export default router;
