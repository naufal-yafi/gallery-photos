import React from "react";
import SearchBar from "../../components/search-bar/search-bar.tsx";
import ListPhoto from "./partials/list-photo/list-photo.tsx";

const Photos = () => {
  return (
    <main id="list-photo" className="pt-8 mt-14 container__padding">
      <SearchBar />
      <ListPhoto />
    </main>
  );
};

export default Photos;
