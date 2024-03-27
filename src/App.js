import GoldCircle from "./components/GoldCircle";
import Background from "./components/background";
import BlurredBox from "./components/blurredbox";
import Button from "./components/button";
import ContextBox from "./components/contextbox";
import ScoreCircle from "./components/scorecircle";
import TitleTextStyle from "./components/titletext";

function App() {
  return (
    <div>
      <Background />
      <GoldCircle />
      <BlurredBox width={"100%"} height={"100%"} name={"LOL BANPICK CONTEST"} />
      <Button width={"50%"} height={"10%"} name={"START"} />
      <ContextBox
        width={300}
        height={200}
        children={<div style={{ width: 300, height: 200 }}> 안녕 </div>}
      />
      <ScoreCircle radius={"250px"} score={35} grade={"23 / 5632"} />
      <TitleTextStyle>League of Legends</TitleTextStyle>
    </div>
  );
}

export default App;
