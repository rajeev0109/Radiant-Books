import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import About from './pages/aboutpage/About';
import Contact from './pages/contactpage/Contact';
import BookPage from './pages/bookpage/Book';
import BookDetails from './pages/bookdetailpage/BookDetails';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/book-details/:id" element={<BookDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
