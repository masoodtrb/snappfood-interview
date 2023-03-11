import React from "react";
import { Provider } from "react-redux";
import { Outlet, Link } from "react-router-dom";

import { store } from "app/store";

import "./main.scss";

interface Props {}

function Main(props: Props) {
  return (
    <Provider store={store}>
      <div className="layout">
        <nav className="layout__nav">
          <ul className="layout__navlist">
            <li className="layout__navitem">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="layout__navitem">
              <Link to={"/vendors"}>Vendor</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
}

export default Main;
