import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'

import Home from './pages/home/Home.jsx';
import Search from './pages/Search/search.jsx';
import Songs from './pages/Songs/songs.jsx';
import Albums from './pages/Albums/albums.jsx';
import Artists from './pages/Artists/artists.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<div className="welcome">Welcome to our songs thing</div>} />
        <Route path="Home" element={< Home/>} />
        <Route path="Search" element={<Search/>} />
        <Route path="Songs" element={<Songs/>} />
        <Route path="Albums" element={<Albums/>} />
        <Route path="artists" element={<Artists />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
