import React from "react";
import CheckDataEmpty from "./handler/check-data-empty.tsx";
import LoadingPhotos from "./handler/loading-photos.tsx";
import useGetAllPhoto from "./hooks/useGetAllPhoto.ts";

const ListPhoto = () => {
  const { photos, photoIsLoading } = useGetAllPhoto();

  return (
    <section className="pt-8">
      {photoIsLoading ? (
        <LoadingPhotos />
      ) : (
        <CheckDataEmpty photos={photos}></CheckDataEmpty>
      )}
    </section>
  );
};

export default ListPhoto;
