import React from "react";
import { Link } from "react-router-dom";
import PhotoType from "../../../../types/photo.type.ts";
import MoreVerticalDot from "./more-vertical-dot/more-vertical-dot.tsx";

const Card = ({ photo }: { photo: PhotoType }) => {
  return (
    <figure>
      <Link to={`/album/${photo.id}?q=${photo.id}&d=${photo.createdAt}`}>
        <img
          className="object-cover rounded-3xl w-90"
          src={photo.imageUrl}
          alt={photo.captions}
        />
      </Link>

      <figcaption className="flex items-start justify-between py-2">
        <h3
          className="mb-4 text-base font-medium truncate"
          data-testid="photo-caption"
        >
          {photo.captions}
        </h3>

        <MoreVerticalDot id={photo.id} date={photo.createdAt} />
      </figcaption>
    </figure>
  );
};

export default Card;
