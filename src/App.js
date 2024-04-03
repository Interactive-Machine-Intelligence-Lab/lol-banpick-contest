import "./App.css";
import HomeView from "./pages/home/view";
import MatchView from "./pages/match/view";
import LoginView from "./pages/login/view";
import ResultView from "./pages/result/view";
import HomeViewModel from "./pages/home/vm";

function App() {
  const homevm = new HomeViewModel();

  return (
    <div>
      <HomeView vm={homevm} />
      <LoginView />
      <MatchView />
      <ResultView />
    </div>
  );
}

export default App;
