import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Landingpage from './Pages/landingpage';
import Laeknar from './Pages/laeknar';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/laeknar" element={<Laeknar />} />
          <Route path="/" element={<Landingpage />} />
        </Routes>
        <Footer/>
      </React.Fragment>
    </Router>
  );
}

export default App;
