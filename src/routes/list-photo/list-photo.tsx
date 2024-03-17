import React from "react";
import useGetAllPhoto from "../../hooks/useGetAllPhoto.ts";

const ListPhoto = () => {
  const { photos, photoIsLoading } = useGetAllPhoto();

  if (photoIsLoading) {
    return <h1>Loading...</h1>;
  }

  return <section>{JSON.stringify(photos)}</section>;
};

export default ListPhoto;
