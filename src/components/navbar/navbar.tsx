import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./partials/search-bar.tsx";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 justify-between w-full px-6 bg-white flex__center md:px-32 h-14">
      <nav className="gap-2 flex__center">
        <img src="/favicon.ico" alt="logo" title="home" className="w-10 h-10" />

        <ul className="flex__center">
          <li>
            <Link to="/">
              <button className="btn active">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/album">
              <button className="btn deactive">Album</button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="gap-4 flex__center">
        <SearchBar />

        <Link to="/auth/login">
          <button className="font-mono text-white bg-red-600 btn">Login</button>
        </Link>
      </div>
    </header>
  );
}
