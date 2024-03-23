import React from "react";
import PhotoType from "../../../../types/photo.type";
import MoreVerticalDot from "../../partials/components/more-vertical-dot/more-vertical-dot.tsx";
import formatDate from "../lib/format-date.ts";

export default function DetailCard({ photo }: Readonly<{ photo: PhotoType }>) {
  return (
    <section className="px-6 pt-12 columns-1 md:columns-2 md:px-32">
      <figure>
        <img
          src={photo?.imageUrl}
          alt="thumbnail"
          className="w-full rounded-3xl"
        />
      </figure>

      <figcaption className="mt-4 md:mt-0">
        <MoreVerticalDot id={photo.id} date={photo.createdAt} />
        <h1>{photo?.captions}</h1>
        <p className="mt-2 text-xs opacity-80">
          {photo?.createdAt !== photo?.updatedAt
            ? formatDate(photo.updatedAt)
            : formatDate(photo.createdAt)}
        </p>
      </figcaption>
    </section>
  );
}
