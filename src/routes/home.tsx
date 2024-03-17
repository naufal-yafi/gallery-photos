import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main id="home">
      <section className="flex flex-wrap px-5 my-16">
        <aside className="self-center w-full px-5 lg:w-1/2">
          <h1
            className="text-4xl text-[#213644]
        font-bold lg:text-6xl md:text-5xl"
          >
            Gallery Photos
          </h1>
          <p className="mb-5 text-xs font-normal leading-relaxed text-gray-400 md:text-base lg:text-xl lg:mt-3 ">
            App for all photos that are arranged automatically
          </p>
          <Link
            to="/add"
            className="text-base font-semibold text-white bg-[#C6AB7C] py-2 px-6 rounded-full hover:shadow-lg hover:opacity-80 transition duration-150"
          >
            Get Started
          </Link>
        </aside>

        <figure className="self-end w-full px-5 my-3 lg:w-1/2 mt-9">
          <img
            src="../assets/header.svg "
            className="max-w-full mx-auto"
            alt="foto Citra"
          />
        </figure>
      </section>
    </main>
  );
};

export default Home;
