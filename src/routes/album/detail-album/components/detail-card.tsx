import React from "react";
import PhotoType from "../../../../types/photo.type";
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

      <figcaption>
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
