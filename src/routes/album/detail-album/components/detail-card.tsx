import React from "react";
import PhotoType from "../../../../types/photo.type";

export default function DetailCard({
  photo,
}: Readonly<{ photo: PhotoType | undefined }>) {
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
        <p>{photo?.createdAt}</p>
      </figcaption>
    </section>
  );
}
