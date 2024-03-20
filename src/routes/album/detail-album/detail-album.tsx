import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar.tsx";
import DetailCard from "./components/detail-card.tsx";
import useGetPhotoBySlug from "./hooks/useGetPhotoBySlug.ts";

export default function DetailAlbum() {
  const params = useParams();
  const getSlug: string = params.slug ?? "";
  const { photo, photoIsLoading } = useGetPhotoBySlug(getSlug);
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
      <Navbar />
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
