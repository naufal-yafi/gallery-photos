import React from "react";
import { Link } from "react-router-dom";
import PhotoType from "../../../../../types/photo.type.ts";

const Card = ({ photo }: { photo: PhotoType }) => {
  return (
    <figure>
      <Link to={`/album/${photo.captions}`}>
        <img
          className="object-cover rounded-3xl w-90"
          src={photo.imageUrl}
          alt={photo.captions}
        />
      </Link>

      <figcaption className="py-2">
        <h3
          className="mb-4 text-base font-medium truncate"
          data-testid="photo-caption"
        >
          {photo.captions}
        </h3>
      </figcaption>
    </figure>
  );
};

export default Card;
