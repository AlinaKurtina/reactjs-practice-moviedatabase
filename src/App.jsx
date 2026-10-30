import HomePage from "./pages/home/HomePage.jsx";
import MovieDetailsPage from "./pages/details/MovieDetailsPage.jsx";
import SearchPage from "./pages/search/SearchPage.jsx";

import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import ErrorMessage from "./components/layout/ErrorMessage/ErrorMessage.jsx";
import React from "react";
import Header from "./components/layout/Header/Header.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// oxlint-disable-next-line no-unused-vars
import i18n from "./i18next.js";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
