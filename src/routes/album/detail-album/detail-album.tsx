import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar.tsx";
import useGetPhotoById from "../../../hooks/useGetPhotoById.ts";
import DetailCard from "./components/detail-card.tsx";

export default function DetailAlbum() {
  const params = useParams();
  const getId: string = params.id ?? "";
  const { photo, photoIsLoading } = useGetPhotoById(getId);
  const empty = {
    captions: "",
    imageUrl: "",
    createdAt: "",
    updatedAt: "",
    secret: "",
    id: 0,
  };
  const isEmpty = photo ?? empty;

  return (
    <React.Fragment>
      <Navbar title={`${photo?.captions} | Gallery Photo`} />

      <main className="mt-14">
        {photoIsLoading ? (
          <h1 className="pt-20 text-center pb-14">Loading...</h1>
        ) : (
          <>
            {photo ? (
              <DetailCard photo={isEmpty} />
            ) : (
              <h1 className="pt-20 text-center pb-14">Album Not Found...</h1>
            )}
          </>
        )}
      </main>
    </React.Fragment>
  );
}
