import "./css/common.css";
import "./css/home.css";

import { Routes, Route } from "react-router-dom";

import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Mainbanner from "./components/Mainbanner";
import QuickMenu from "./components/QuickMenu";
import HelpSection from "./components/HelpSection";
import AnimalDetail from "./pages/AnimalDetail";
import ShelterBanner from "./components/ShelterBanner";

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
                </main>
              </div>
            </>
          }
        />

        <Route path="/animal/:id" element={<AnimalDetail />} />
      </Routes>

      <BottomNav />
    </div>
  );
}

export default App;