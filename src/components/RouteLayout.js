import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavbarPanal";
import { Provider } from "react-redux";
import store from "../store/store";

const RouteLayout = () => {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <Outlet />
      </Provider>
    </div>
  );
};

export default RouteLayout;
