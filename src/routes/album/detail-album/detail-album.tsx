import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar.tsx";
import DetailCard from "./components/detail-card.tsx";
import useGetPhotoBySlug from "./hooks/useGetPhotoBySlug.ts";

export default function DetailAlbum() {
  const params = useParams();
  const getSlug: string = params.slug ?? "";
  const { photo, photoIsLoading } = useGetPhotoBySlug(getSlug);

  console.log(photo);

  return (
    <React.Fragment>
      <Navbar />

      <main className="mt-14">
        {photoIsLoading ? (
          <h1 className="pt-20 text-center pb-14">Loading...</h1>
        ) : (
          <DetailCard photo={photo} />
        )}
      </main>
    </React.Fragment>
  );
}
