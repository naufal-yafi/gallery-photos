import React from "react";
import CheckDataEmpty from "./handler/check-data-empty.tsx";
import LoadingPhotos from "./handler/loading-photos.tsx";
import useGetAllPhoto from "./hooks/useGetAllPhoto.ts";

const ListPhoto = () => {
  const { photos, photoIsLoading } = useGetAllPhoto();

  return (
    <section>
      {photoIsLoading ? <LoadingPhotos /> : <CheckDataEmpty photos={photos} />}
    </section>
  );
};

export default ListPhoto;
