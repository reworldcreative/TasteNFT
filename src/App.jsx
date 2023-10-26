import React from "react";
import { Routes, Route } from "react-router-dom";

import { register } from "swiper/element/bundle";
register();

import MainPage from "./pages/MainPage/MainPage";
import ArtworkPage from "./pages/Artwork/ArtworkPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/artwork" element={<ArtworkPage />} />
        <Route
          exact
          path="*"
          element={<div className="section-title">404 Page not found</div>}
        />
      </Routes>

      {/* <MainPage /> */}
      {/* <ArtworkPage /> */}
    </>
  );
}
