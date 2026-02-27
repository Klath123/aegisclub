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

// Dashboard pages (lazy loaded)
const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const PitchPePaisa = lazy(() => import("./pages/dashboard/PitchPePaisa.tsx"));
const DecipherBlitz = lazy(() => import("./pages/dashboard/DecipherBlitz.tsx"));
const LensAndLore = lazy(() => import("./pages/dashboard/LensAndLore.tsx"));
const PopcornPanic = lazy(() => import("./pages/dashboard/PopcornPanic.tsx"));
const EscapeEnigma = lazy(() => import("./pages/dashboard/EscapeEnigma.tsx"));
const ValorantBattle = lazy(() => import("./pages/dashboard/ValorantBattle.tsx"));
const BGMILastSquad = lazy(() => import("./pages/dashboard/BGMILastSquad.tsx"));

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

        {/* Dashboard — outside Layout (no navbar/footer) */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/pitch-pe-paisa" element={<PitchPePaisa />} />
        <Route path="dashboard/decipher-blitz" element={<DecipherBlitz />} />
        <Route path="dashboard/lens-and-lore" element={<LensAndLore />} />
        <Route path="dashboard/popcorn-panic" element={<PopcornPanic />} />
        <Route path="dashboard/escape-enigma" element={<EscapeEnigma />} />
        <Route path="dashboard/valorant-battle" element={<ValorantBattle />} />
        <Route path="dashboard/bgmi-lss" element={<BGMILastSquad />} />
      </Routes>
    </Suspense>
  );
}

export default App;
