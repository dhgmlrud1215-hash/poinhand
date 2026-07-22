import "./css/common.css";
import "./css/home.css";
import "./css/footer.css";
import "./css/shelter.css";
import "./css/shelterBanner.css";
import "./css/animalstate.css";
import "./css/lost.css";
import "./css/community.css";

import { Routes, Route } from "react-router-dom";

import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Mainbanner from "./components/Mainbanner";
import QuickMenu from "./components/QuickMenu";
import HelpSection from "./components/HelpSection";
import ShelterBanner from "./components/ShelterBanner";
import Youtubestory from "./components/YoutubeStory";
import AdoptionCulture from "./components/AdoptionCulture";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
import AnimalStats from "./components/AnimalState";


import AnimalDetail from "./pages/AnimalDetail";
import CulturePage from "./pages/CulturePage";
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import Shelters from "./pages/Shelters";
import LostReport  from "./pages/LostReport";
import Community from "./pages/Community";
import CommunityDetail from "./pages/CommunityDetail";
import RescueStoryDetail from "./pages/RescueStoryDetail";
import RescueStoryList from "./pages/RescueStoryList";

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
                  <NewsSection />
                </main>
              </div>

              <AnimalStats />
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
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/lost" element={<LostReport />} />
        <Route path="/community" element={<Community />} />
        <Route path="/rescue-stories" element={<RescueStoryList />} />
        <Route
          path="/community/:id/rescue-story"
          element={<RescueStoryDetail />}
        />
        <Route path="/community/:id" element={<CommunityDetail />} />
      </Routes>

      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
