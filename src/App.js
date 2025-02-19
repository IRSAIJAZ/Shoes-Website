import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Contact from './Pages/ContactUS';
import About from './Pages/About';
import Location from './Pages/Location';
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Index route - shown when path is "/" */}
          <Route index element={<Home />} />
          
          {/* Other routes nested under Layout */}
          <Route path="home" element={<Home />} />
          <Route path="location" element={<Location />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          
          {/* 404 route - shown when no other routes match */}
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <h1>404: Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;