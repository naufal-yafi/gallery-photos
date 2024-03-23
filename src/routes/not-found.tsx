import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar.tsx";

const NotFound = () => {
  return (
    <React.Fragment>
      <Navbar title="Page Not Found" />

      <main className="flex-col h-screen mt-14 flex__center container__padding">
        <h2 className="font-bold text-red-500">404 Not Found!</h2>
        <h1 className="mt-2 text-5xl font-bold">
          The page you are going to is not available
        </h1>

        <Link to="/">
          <button className="text-white bg-red-600 mt-9 btn">
            Back to Home
          </button>
        </Link>
      </main>
    </React.Fragment>
  );
};

export default NotFound;
