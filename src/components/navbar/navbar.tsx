import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({
  home,
  album,
  auth,
}: Readonly<{
  home?: boolean;
  album?: boolean;
  auth?: boolean;
}>) {
  return (
    <header className="fixed top-0 left-0 justify-between w-full px-6 bg-white flex__center md:px-32 h-14">
      <nav className="gap-2 flex__center">
        <Link to="/">
          <img
            src="/favicon.ico"
            alt="logo"
            title="home"
            className="w-10 h-10"
          />
        </Link>

        <ul className="flex__center">
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
      </nav>

      {auth ?? (
        <div>
          <Link to="/auth/login">
            <button className="font-mono text-white bg-red-600 btn">
              Login
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
