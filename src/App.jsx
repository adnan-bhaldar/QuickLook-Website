import { useGitHubRelease } from './hooks/useGitHubRelease';
import { VersionContext } from './context/VersionContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import Footer from './components/Footer';

/**
 * Main App component
 * Orchestrates the entire landing page and provides version context
 */
function App() {
  const versionData = useGitHubRelease();

  return (
    <VersionContext.Provider value={versionData}>
      <div className="min-h-screen bg-dark-950 text-white antialiased">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Installation />
        </main>
        <Footer />
      </div>
    </VersionContext.Provider>
  );
}

export default App;