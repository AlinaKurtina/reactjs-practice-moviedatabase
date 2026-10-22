import HomePage from "./pages/home/HomePage.jsx";
import MovieDetailsPage from './pages/details/MovieDetailsPage.jsx';
import SearchPage from "./pages/search/SearchPage.jsx";

import { BrowserRouter, Routes, Route } from 'react-router';

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from './services/api.js';

function App() {
  return (
    <ApiProvider api={api}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:id' element={<MovieDetailsPage />} />
          <Route path='/search/' element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  )
}

export default App;
