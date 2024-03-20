import React from "react";
import Navbar from "../../components/navbar/navbar.tsx";
import ListPhoto from "./partials/list-photo.tsx";

const Photos = () => {
  return (
    <React.Fragment>
      <Navbar album />

      <main id="list-photo" className="mt-14 container__padding">
        <ListPhoto />
      </main>
    </React.Fragment>
  );
};

export default Photos;
