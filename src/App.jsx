import "./css/common.css";
import "./css/home.css";

import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Mainbanner from "./components/Mainbanner";

function App() {
  return (
    <div className="app">
      <Header />
      <Mainbanner />
      <BottomNav />
    </div>
  );
}

export default App;