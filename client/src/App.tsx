import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import Sandbox from "./pages/Sandbox";
import Glitchcraft from "./pages/Glitchcraft.tsx";
import EventsGallery from "./pages/Gallery.tsx";
import Register from "./pages/Register.tsx";
import NotFound from "./pages/NotFound";
import GlitchCraft2 from './pages/GlitchCraft2';



// Lazy loaded pages
const About = lazy(() => import("./pages/About.tsx"));
const Events = lazy(() => import("./pages/Events.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Achievements = lazy(() => import("./pages/Achievements.tsx"));
const Members = lazy(() => import("./pages/Members.tsx"));
const SandboxDetail = lazy(() => import("./pages/Sandbox.tsx"));
const GlitchcraftDetail = lazy(() => import("./components/GlitchcraftDetail.tsx"));
// const EventsPage = lazy(() => import("./pages/Events.tsx"));

// Loader fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#0a0a0f]">
    <div className="text-cyan-400 font-mono">Loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Home */}
          <Route index element={<Home />} />

          {/* Static pages */}
          <Route path="about" element={<About />} />
          <Route path="members" element={<Members />} />
          <Route path="contact" element={<Contact />} />
          <Route path="achievements" element={<Achievements />} />

          {/* Events */}
          <Route path="events" element={<Events />} />
          <Route path="events/sandbox" element={<SandboxDetail />} />
          <Route path="events/glitchcraft" element={<GlitchcraftDetail />} />

          {/* Standalone pages */}
          <Route path="sandbox" element={<Sandbox />} />
          <Route path="glitchcraft" element={<Glitchcraft />} />
          <Route path="/glitchcraft-2.0" element={<GlitchCraft2 />} />
          <Route path="gallery" element={<EventsGallery />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
