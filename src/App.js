import GoldCircle from "./components/GoldCircle";
import Background from "./components/background";
import BlurredBox from "./components/blurredbox";
import Button from "./components/button";

function App() {
  return (
    <div>
      <Background />
      <GoldCircle top={"20%"} />
      <BlurredBox width={"100%"} height={"100%"} name={"LOL BANPICK CONTEST"} />
      <Button width={"50%"} height={"10%"} name={"START"} />
    </div>
  );
}

export default App;
