import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import PublicationsPage from './pages/PublicationsPage';
import useHashRoute from './hooks/useHashRoute';

const App = () => {
  const route = useHashRoute();

  // 換頁時捲到頂端；#/research 則捲到首頁的研究領域區塊
  useEffect(() => {
    if (route === 'research') {
      requestAnimationFrame(() =>
        document.getElementById('research-section')?.scrollIntoView({ behavior: 'smooth' })
      );
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [route]);

  const page = route === 'home' || route === 'research' ? 'home' : route;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <NavBar route={route} />

      <main className="pt-16">
        {page === 'home' && <HomePage />}
        {page === 'team' && <TeamPage />}
        {page === 'publications' && <PublicationsPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
