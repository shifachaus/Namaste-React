import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import UserContext from "./Utils/UserContext";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./Utils/store";
import Cart from "./Components/Cart";

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayoutComponent = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const data = {
      name: "Shifa Chaus",
      email: "shifa@gmail.com",
    };

    setUser(data);
  }, []);

  // console.log(user);

  return (
    <Provider store={store}>
      <div className="app">
        <UserContext.Provider value={{ user: user, setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
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
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
