import "./App.css";
import HomeView from "./pages/home/view";
import MatchView from "./pages/match/view";
import LoginView from "./pages/login/view";
import ResultView from "./pages/result/view";

function App() {
  return (
    <div>
      <HomeView />
      <LoginView />
      <MatchView />
      <ResultView />
    </div>
  );
}

export default App;
