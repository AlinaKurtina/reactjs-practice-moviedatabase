import HomePage from "./pages/home/HomePage.jsx";
import MovieDetailsPage from "./pages/details/MovieDetailsPage.jsx";
import SearchPage from "./pages/search/SearchPage.jsx";

import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./services/api.js";
import ErrorMessage from "./components/layout/ErrorMessage/ErrorMessage.jsx";
import React from "react";
import Navigation from "./components/layout/Navigation/Navigation.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";

const Layout = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

function App() {
  return (
    <ApiProvider api={api}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
            <Route path="/search/" element={<SearchPage />} />
            <Route path="*" element={<ErrorMessage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
