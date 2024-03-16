import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import AddPhoto from "./routes/forms/add/add-photo.tsx";
import EditPhoto from "./routes/forms/update/edit-photo.tsx";
import Home from "./routes/home.tsx";
import Photos from "./routes/list-photo/photos.tsx";
import NotFound from "./routes/not-found.tsx";
import "./style/app.css";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos">
          <Route index element={<Photos />} />
          <Route path=":id" element={<EditPhoto />} />
        </Route>
        <Route path="/add" element={<AddPhoto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;