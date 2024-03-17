import React from "react";
import { Link } from "react-router-dom";
import PhotoType from "../../types/photo.type";

const Card = ({ photo }: { photo: PhotoType }) => {
  return (
    <div className="w-3/5 p-3 mx-10 my-3 bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 lg:w-full lg:mx-0">
      <figure>
        <img
          className="object-cover w-90"
          src={photo.imageUrl}
          alt={photo.captions}
        />

        <figcaption className="p-2 bg-white">
          <h3 className="mb-4 text-base bg-white " data-testid="photo-caption">
            {photo.captions}
          </h3>

          <button className="px-5 py-2 mb-2 mr-2 text-sm font-medium text-white rounded-lg bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-blue-300 dark:bg-sky-600 dark:hover:bg-sky-500 focus:outline-none dark:focus:ring-blue-800">
            <Link to={`${photo.id}`}>Edit</Link>
          </button>
          <button
            data-testid="delete-btn"
            className="px-5 py-2 mb-2 mr-2 text-sm font-medium text-white bg-red-700 rounded-lg focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Delete
          </button>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
