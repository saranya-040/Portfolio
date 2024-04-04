import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default App;
