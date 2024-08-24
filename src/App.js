import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./Components/Header.js";
import Body from "./Components/Body.js";

import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Error from "./Components/Error.js";
import RestaurantsMenu from "./Components/RestaurantsMenu.js";
// import Grocery from "./Grocery.js";
import { Provider } from "react-redux";
import appStore from "./Constants/appStore.js";
import Cart from "./Components/Cart.js";

const Grocery = lazy(() => import("./Grocery.js"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header></Header>
        <Outlet />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
