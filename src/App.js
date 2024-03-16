import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound from "./routes/not-found";
import AddPhoto from "./routes/forms/add-photo";
import EditPhoto from "./routes/forms/edit-photo";
import Home from "./routes/home";
import Photos from "./routes/photos";
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
