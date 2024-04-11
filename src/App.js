import "./App.css";
import HomeView from "./pages/home/view";
import MatchView from "./pages/match/view";
import SignUpView from "./pages/user/signup/view";
import LoginView from "./pages/user/login/view";
import ResultView from "./pages/result/view";

import HomeViewModel from "./pages/home/vm";
import LoginViewModel from "./pages/user/login/vm";
import SignUpViewModel from "./pages/user/signup/vm";
import MatchViewModel from "./pages/match/vm";
import ResultViewModel from "./pages/result/vm";

import { Routes, Route, useNavigate } from "react-router-dom";
import { routerStore } from "./store/route";
import { useEffect } from "react";

function NavigationProvider() {
  const navigate = useNavigate();

  useEffect(() => {
    routerStore.setNavigator(navigate);
  }, [navigate]);

  return null; // 또는 라우팅 관련 컴포넌트 렌더링
}

function App() {
  const homevm = new HomeViewModel();
  const matchvm = new MatchViewModel();
  const resultvm = new ResultViewModel();
  const LogInvm = new LoginViewModel();
  const SignUpvm = new SignUpViewModel();

  return (
    <>
      <NavigationProvider />
      <Routes>
        <Route path="/" element={<HomeView vm={homevm} />} />
        <Route path="/user/signup" element={<SignUpView vm={SignUpvm} />} />
        <Route path="/user/signin" element={<LoginView vm={LogInvm} />} />
        <Route path="/match" element={<MatchView vm={matchvm} />} />
        <Route path="/result" element={<ResultView vm={resultvm} />} />
      </Routes>
    </>
  );
}

export default App;
