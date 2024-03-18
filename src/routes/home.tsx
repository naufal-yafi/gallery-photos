import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar.tsx";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar home />

      <main id="home" className="pt-7 md:pt-12 mt-14 container__padding">
        <section>
          <h1 className="text-4xl font-bold md:text-7xl">
            Share pictures that you think others should see.
          </h1>
          <p className="mt-2">
            Share images that make others happy by observing the applicable
            rules and policies.
          </p>

          <Link to="/album">
            <button className="w-full py-4 mt-5 text-white bg-red-600 btn">
              See all photo now
            </button>
          </Link>

          <img
            src="/assets/thumbnail.png"
            alt="thumbnail"
            className="w-full mt-5 rounded-2xl md:mt-10 md:ounded-3xl"
          />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
