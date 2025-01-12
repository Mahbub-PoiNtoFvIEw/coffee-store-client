import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./Home/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignIn from "./components/signIn.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";
import UpdateProfile from "./components/UpdateProfile.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import ViewCoffeeDetails from "./components/ViewCoffeeDetails.jsx";
import AddJuice from "./components/AddJuice.jsx";
import Coffee from "./components/Coffee.jsx";
import Juice from "./components/Juice.jsx";
import ViewJuiceDetails from "./components/ViewJuiceDetails.jsx";
import UpdateJuice from "./components/UpdateJuice.jsx";
import SignUp from "./components/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: 
          <PrivateRoutes>
            <Home></Home>
          </PrivateRoutes>,
        children: [
          {
            path: "",
            element: <Navigate to={`/coffee`}></Navigate>
          },
          {
            path: "/coffee",
            element: <Coffee></Coffee>,
            loader: () => fetch("http://localhost:5000/coffee"),
          },
          {
            path: "/juice",
            element: <Juice></Juice>,
            loader: () => fetch("http://localhost:5000/juice"),
          },
        ],
      },
      {
        path: "/addCoffee",
        element: (
          <PrivateRoutes>
            <AddCoffee></AddCoffee>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateCoffee/:id",
        element: (
          <PrivateRoutes>
            <UpdateCoffee></UpdateCoffee>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: (
          <PrivateRoutes>
            <Users></Users>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/user"),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/viewCoffeeDetails/:id",
        element: (
          <PrivateRoutes>
            <ViewCoffeeDetails></ViewCoffeeDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/addJuice",
        element: <PrivateRoutes><AddJuice></AddJuice></PrivateRoutes>
      },
      {
        path: "/viewJuiceDetails/:id",
        element: (
          <PrivateRoutes>
            <ViewJuiceDetails></ViewJuiceDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/juice/${params.id}`),
      },
      {
        path: "/updateJuice/:id",
        element: (
          <PrivateRoutes>
            <UpdateJuice></UpdateJuice>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/juice/${params.id}`),
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
