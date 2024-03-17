import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer.tsx";
import Navbar from "./components/navbar.tsx";
import AddPhoto from "./routes/forms/add/add-photo.tsx";
import EditPhoto from "./routes/forms/update/edit-photo.tsx";
import Home from "./routes/home.tsx";
import NotFound from "./routes/not-found.tsx";
import Photos from "./routes/photos.tsx";
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

      <Footer />
    </React.Fragment>
  );
};

export default App;
