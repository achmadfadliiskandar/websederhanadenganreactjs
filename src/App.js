import React from 'react';
import Navbar from './Navbar';
import Jumbo  from './Jumbo';
import About from './About';
import Progres from './Progres';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Navbar />
        <Jumbo />
        <About />
        <Progress />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
