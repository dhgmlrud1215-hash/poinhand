import "./css/common.css";
import "./css/home.css";

import { Routes, Route } from "react-router-dom";

import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Mainbanner from "./components/Mainbanner";
import QuickMenu from "./components/QuickMenu";
import HelpSection from "./components/HelpSection";
import ShelterBanner from "./components/ShelterBanner";
import Youtubestory from "./components/YoutubeStory";
import AdoptionCulture from "./components/AdoptionCulture";

import AnimalDetail from "./pages/AnimalDetail";
import CulturePage from "./pages/CulturePage";
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Mainbanner />

              <div className="home-layout">
                <QuickMenu />

                <main className="home-content">
                  <HelpSection />
                  <ShelterBanner />
                  <Youtubestory />
                  <AdoptionCulture />
                </main>
              </div>
            </>
          }
        />

        <Route path="/animal/:id" element={<AnimalDetail />} />

        <Route
          path="/campaign"
          element={<CulturePage category="campaign" />}
        />

        <Route
          path="/donation"
          element={<CulturePage category="donation" />}
        />

        <Route
          path="/volunteer"
          element={<CulturePage category="volunteer" />}
        />

        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>

      <BottomNav />
    </div>
  );
}

export default App;