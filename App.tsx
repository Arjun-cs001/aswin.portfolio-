import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Testimonials />
        <Portfolio />
        <Process />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;