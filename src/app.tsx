import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer.tsx";
import DetailAlbum from "./routes/album/detail-album/detail-album.tsx";
import Photos from "./routes/album/photos.tsx";
import Login from "./routes/auth/login/login.tsx";
import AddPhoto from "./routes/forms/add/add-photo.tsx";
import Home from "./routes/home.tsx";
import NotFound from "./routes/not-found.tsx";
import "./style/app.css";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album">
          <Route index element={<Photos />} />
          <Route path=":id" element={<DetailAlbum />} />
        </Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/logout" element={<AddPhoto />} />
        <Route path="/add" element={<AddPhoto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
};

export default App;
