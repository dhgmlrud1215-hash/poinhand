import "./css/common.css";
import "./css/home.css";

import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Mainbanner from "./components/Mainbanner";
import QuickMenu from "./components/QuickMenu";

function App() {
  return (
    <div className="app">
      <Header />
      <Mainbanner />

      <div className="home-layout">
        <QuickMenu />
        <main className="home-content">

        </main>
      </div>
      <BottomNav />
    </div>
  );
}

export default App;