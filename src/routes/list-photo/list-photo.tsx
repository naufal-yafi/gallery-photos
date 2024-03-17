import React from "react";
import useGetAllPhoto from "../../hooks/useGetAllPhoto.ts";
import CheckDataEmpty from "./check-data-empty.tsx";
import LoadingPhotos from "./loading-photos.tsx";

const ListPhoto = () => {
  const { photos, photoIsLoading } = useGetAllPhoto();

  return (
    <section>
      {photoIsLoading ? <LoadingPhotos /> : <CheckDataEmpty photos={photos} />}
    </section>
  );
};

export default ListPhoto;
