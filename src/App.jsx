import React from "react";
import { Routes, Route } from "react-router-dom";

import { register } from "swiper/element/bundle";
register();

import MainPage from "./pages/MainPage/MainPage";
import ArtworkPage from "./pages/Artwork/ArtworkPage";
import CreatorProfile from "./pages/CreatorProfile/CreatorProfile";
import UserProfile from "./pages/UserProfile/UserProfile";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/artwork" element={<ArtworkPage />} />
        <Route exact path="/creator-profile" element={<CreatorProfile />} />
        <Route exact path="/user-profile" element={<UserProfile />} />
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
