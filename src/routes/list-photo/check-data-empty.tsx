import React from "react";
import EachRender from "../../components/each-render.tsx";
import PhotoType from "../../types/photo.type";
import Card from "./card.tsx";

const CheckDataEmpty = ({ photos }: { photos: PhotoType[] }) => {
  return (
    <>
      {photos?.length === 0 ? (
        <h1>Empty data...</h1>
      ) : (
        <EachRender
          of={photos}
          render={(photo: PhotoType) => <Card key={photo.id} photo={photo} />}
        />
      )}
    </>
  );
};

export default CheckDataEmpty;
