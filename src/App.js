import "./App.css";
import HomeView from "./pages/home/view";
import MatchView from "./pages/match/view";
import LoginView from "./pages/login/view";
import ResultView from "./pages/result/view";
import HomeViewModel from "./pages/home/vm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const homevm = new HomeViewModel();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView vm={homevm} />} />
        <Route path="/user" element={<LoginView />} />
        <Route path="/match" element={<MatchView />} />
        <Route path="/result" element={<ResultView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
