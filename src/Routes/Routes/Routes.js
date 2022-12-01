import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
// import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
// import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Wishlist from "../../Pages/Dashboard/Wishlist/Wishlist";
import Home from "../../Pages/Home/Home/Home";
import Categories from "../../Pages/Products/Categories/Categories";
import ProductsPerCategory from "../../Pages/Products/ProductsPerCategory/ProductsPerCategory";
import Login from "../../Pages/UserRegistration/Login/Login";
import Signup from "../../Pages/UserRegistration/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import ErrorRoute from "../ErrorRoute/ErrorRoute";
import NotFoundRoute from "../NotFoundRoute/NotFoundRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorRoute></ErrorRoute>,
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
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/categories/:id",
        element: <ProductsPerCategory></ProductsPerCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorRoute></ErrorRoute>,
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
        element: (
          <SellerRoute>
            <AddProducts></AddProducts>
          </SellerRoute>
        ),
        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      // {
      //   path: "/dashboard/mybuyers",
      //   element: (
      //     <SellerRoute>
      //       <MyBuyers></MyBuyers>
      //     </SellerRoute>
      //   ),
      // },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      // {
      //   path: "/dashboard/reporteditems",
      //   element: (
      //     <AdminRoute>
      //       <ReportedItems></ReportedItems>
      //     </AdminRoute>
      //   ),
      // },
      {
        path: "/dashboard/myorders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <BuyerRoute>
            <Wishlist></Wishlist>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <BuyerRoute>
            <Payment></Payment>
          </BuyerRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
  {
    path: "/*",
    element: <NotFoundRoute></NotFoundRoute>,
  },
]);

export default router;
