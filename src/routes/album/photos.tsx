import React from "react";
import Navbar from "../../components/navbar/navbar.tsx";
import SearchBar from "../../components/search-bar/search-bar.tsx";
import ListPhoto from "./partials/list-photo/list-photo.tsx";

const Photos = () => {
  return (
    <React.Fragment>
      <Navbar album />

      <main id="list-photo" className="pt-8 mt-14 container__padding">
        <SearchBar />
        <ListPhoto />
      </main>
    </React.Fragment>
  );
};

export default Photos;
