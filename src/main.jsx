import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./Home/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignIn from "./components/signIn.jsx";
import SignUp from "./components/signUp.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";
import UpdateProfile from "./components/UpdateProfile.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import ViewCoffeeDetails from "./components/ViewCoffeeDetails.jsx";
import AddJuice from "./components/AddJuice.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Home></Home>
          </PrivateRoutes>
        ),
        loader: async () => {
          const coffeeResponse = await fetch("http://localhost:5000/coffee");
          const juiceResponse = await fetch("http://localhost:5000/juice");
      
          // Assuming both responses are in JSON format
          const loadedCoffee = await coffeeResponse.json();
          const loadedJuice = await juiceResponse.json();
      
          // Return an object with both coffee and juice data
          return { loadedCoffee, loadedJuice };
        },
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
        element: <AddJuice></AddJuice>
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
