import { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import TerminalLoader from "./components/TerminalLoader.tsx";

// Lazy load pages that aren't immediately needed
const About = lazy(() => import("./pages/About.tsx"));
const Events = lazy(() => import("./pages/Events.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Achievements = lazy(() => import("./pages/Achievements.tsx"));
const Members = lazy(() => import("./pages/Members.tsx"));
const SandboxDetail = lazy(() => import("./components/SandboxDetail.tsx"));
const GlitchcraftDetail = lazy(() => import("./components/GlitchcraftDetail.tsx"));

// Simple loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#0a0a0f]">
    <div className="text-cyan-400 font-mono">Loading...</div>
  </div>
);

function App() {
  // Check localStorage to see if loader has been shown before
  const hasSeenLoader = localStorage.getItem('aegis_loader_seen') === 'true';
  const [loaderComplete, setLoaderComplete] = useState(hasSeenLoader);

  const handleLoaderComplete = () => {
    // Save to localStorage that loader has been seen
    localStorage.setItem('aegis_loader_seen', 'true');
    setLoaderComplete(true);
  };

  // Show terminal loader only on first visit
  if (!loaderComplete) {
    return <TerminalLoader onComplete={handleLoaderComplete} />;
  }

  // Show main app content after loader completes
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="events/sandbox" element={<SandboxDetail />} />
          <Route path="events/glitchcraft" element={<GlitchcraftDetail />} />
          <Route path="members" element={<Members />} />
          <Route path="contact" element={<Contact />} />
          <Route path="achievements" element={<Achievements />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
