import React from "react";
import { Link } from "react-router-dom";
import useShowNavbar from "./hooks/useShowNavbar.ts";

export default function Navbar({
  home,
  album,
  auth,
}: Readonly<{
  home?: boolean;
  album?: boolean;
  auth?: boolean;
}>) {
  const { show, handleShow } = useShowNavbar();

  return (
    <React.Fragment>
      <header className="fixed top-0 left-0 z-0 justify-between w-full px-6 bg-white flex__center md:px-32 h-14">
        <Link to="/">
          <img
            src="/favicon.ico"
            alt="logo"
            title="home"
            className="w-10 h-10 mr-3"
          />
        </Link>

        <nav
          className={`absolute right-0 flex flex-col w-full px-6 py-4 bg-white md:translate-y-0 md:px-6 top-14 md:top-0 md:relative md:flex-row transition duration-500 ${
            show ? "-translate-y-[1000%]" : "translate-y-0"
          }`}
        >
          <div className="justify-between w-full gap-2 flex__center">
            <ul className="flex-col w-full gap-2 md:w-auto flex__center md:flex-row">
              <li>
                <Link to="/">
                  <button className={`btn ${home ? "active" : "deactive"}`}>
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/album">
                  <button className={`btn ${album ? "active" : "deactive"}`}>
                    Album
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {auth ?? (
            <div className="mt-2 flex__center md:mt-0">
              <Link to="/auth/login">
                <button className="font-mono text-white bg-red-600 btn">
                  Login
                </button>
              </Link>
            </div>
          )}
        </nav>
      </header>

      <button
        onClick={handleShow}
        className="fixed block top-4 right-6 md:hidden"
      >
        <img src="/assets/menu.svg" alt="menu" className="w-6" />
      </button>
    </React.Fragment>
  );
}
