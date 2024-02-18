import React from "react";
import { Link, Outlet } from "react-router-dom";
import ConverterLogo from "/src/assets/ConverterLogo.png";

function Layout() {
  return (
    <div className="font-customFont flex flex-col min-h-screen">
      <header className="flex items-center justify-center h-20 border-b bg-customRed">
          <div>
            <img className="h-20" src={ConverterLogo} alt="" />
          </div>
        <div className=" gap-10 flex items-center px-10">
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
        </div>
      </header>
      <Outlet  />
      <footer className="h-20 border-t bg-customRed"></footer>
    </div>
  );
}

export default Layout;
