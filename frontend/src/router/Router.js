import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import SearchResultList from "./../pages/SearchResultList";
import TourDetail from "../pages/TourDetail";
import Login from "./../pages/Login";
import Register from "../pages/Register";
import ThankYou from "../pages/ThankYou";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/tours/:id" element={<TourDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
