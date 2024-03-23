import React from "react";
import Navbar from "../../components/navbar/navbar.tsx";
import ListPhoto from "./partials/list-photo.tsx";

const Photos = () => {
  return (
    <React.Fragment>
      <Navbar
        title="View all photos that people have shared | Gallery Photo"
        album
      />

      <main id="list-photo" className="mt-14 container__padding">
        <ListPhoto />
      </main>
    </React.Fragment>
  );
};

export default Photos;
