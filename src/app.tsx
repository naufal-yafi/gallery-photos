import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer.tsx";
import Create from "./routes/admin/create/create.tsx";
import Delete from "./routes/admin/delete/delete.tsx";
import Update from "./routes/admin/update/update.tsx";
import DetailAlbum from "./routes/album/detail-album/detail-album.tsx";
import Photos from "./routes/album/photos.tsx";
import Login from "./routes/auth/login/login.tsx";
import Logout from "./routes/auth/logout/logout.tsx";
import Home from "./routes/home.tsx";
import NotFound from "./routes/not-found.tsx";
import "./style/app.css";

const App = () => {
  const isLogin: boolean = true;

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/album">
          <Route index element={<Photos />} />
          <Route path=":id" element={<DetailAlbum />} />
        </Route>

        <Route path="/auth/login" element={isLogin ? <Photos /> : <Login />} />
        <Route
          path="/auth/logout"
          element={isLogin ? <Logout /> : <Photos />}
        />

        <Route
          path="/admin/create"
          element={isLogin ? <Create /> : <Photos />}
        />

        <Route path="/admin/update">
          <Route index element={<Photos />} />
          <Route path=":id" element={isLogin ? <Update /> : <Photos />} />
        </Route>

        <Route path="/admin/delete">
          <Route index element={<Photos />} />
          <Route path=":id" element={isLogin ? <Delete /> : <Photos />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
};

export default App;
