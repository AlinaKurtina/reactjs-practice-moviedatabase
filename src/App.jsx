import HomePage from "./pages/home/HomePage.jsx";
import MovieDetailsPage from './pages/details/MovieDetailsPage.jsx';
import SearchPage from "./pages/search/SearchPage.jsx";

import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie' element={<MovieDetailsPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
