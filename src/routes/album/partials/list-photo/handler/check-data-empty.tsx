import React from "react";
import EachRender from "../../../../../components/each-render.tsx";
import PhotoType from "../../../../../types/photo.type.ts";
import Card from "../components/card.tsx";

const CheckDataEmpty = ({ photos }: { photos: PhotoType[] }) => {
  return (
    <>
      {photos?.length === 0 ? (
        <h1>Empty data...</h1>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
          <EachRender
            of={photos}
            render={(photo: PhotoType) => <Card key={photo.id} photo={photo} />}
          />
        </div>
      )}
    </>
  );
};

export default CheckDataEmpty;
