import React from "react";
import ListPhoto from "../list-photo/list-photo.tsx";

const Photos = () => {
  return (
    <main id="list-photo" className="containerr">
      <section className="flex justify-center lg:mr-0 lg:justify-between ">
        <select
          data-testid="sort"
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  mr-12 lg:mr-0 lg:w-32"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <form
          className="flex items-center"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            data-testid="search"
            className="self-center block p-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 w-25 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:ml-10"
          />

          <button
            type="submit"
            value="Search"
            data-testid="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </section>

      <ListPhoto />
    </main>
  );
};

export default Photos;
