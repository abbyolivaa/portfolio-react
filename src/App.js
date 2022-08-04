import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import About from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Resume from './components/Pages/Resume';
import Contact from './components/Pages/Contact';

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    else if (currentPage === 'Portfolio') {
      return <Project />;
    }
    else if (currentPage === 'Resume') {
      return <Resume />;
    } else {
      return <Contact />;
    }

  }

  const pageChangeHandler = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Nav currentPage={currentPage} pageChangeHandler={pageChangeHandler} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;