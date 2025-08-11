import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Páginas
import Home from './pages/home';


export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
