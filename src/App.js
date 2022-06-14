import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Enquire from './components/Enquire';
import EnquireList from './components/EnquireList';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <main>
      <Router>
        <Nav/>
        <section className='container'>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/contact" element={<Contact/>}/> 
            <Route path='/enquire/:id' element={<Enquire/>} />
            <Route path='/enq-list' element={<EnquireList/>} />
          
          </Routes>
        </section>
      </Router>
    </main>
    </>
  );
}

export default App;
