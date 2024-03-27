import textbg from "../assets/images/textbg.png";
import styled from "styled-components";

const TitleTextStyle = styled.div`
  width: 100%;
  font-family: Beaufort;
  font-size: 96px;
  font-weight: 800;
  background-image: url(${textbg});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  align-self: center;
  filter: contrast(150%) saturate(130%) brightness(85%);
  line-height: 121px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  text-shadow: 0px 0px 50.1px rgba(255, 255, 255, 0.5);
`;

export default TitleTextStyle;
