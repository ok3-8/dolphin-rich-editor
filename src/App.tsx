import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Editor from "./components/Editor";
import EditorMenu from "./components/EditorMenu";
import SVG from "./components/SVG";
import initialValue from "./example";
import ThemeSwitch, { Theme } from "./ThemeSwitch";

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <AppContainer theme={theme}>
      <LeftTop>
        <ThemeSwitch theme={theme} onSwitchTheme={setTheme} />
      </LeftTop>

      <BaseIntro>
        <SVG
          icon="ri-booklet-fill"
          className="fill-white inline-block mr-8"
        ></SVG>
        <AppTitle>Your Customize Rich Editor</AppTitle>
      </BaseIntro>
      <EditorBox>
        <EditorMenu />
        <Editor onChange={(v) => console.log(v)} initialVals={initialValue} />
      </EditorBox>
      <AppFooter>
        <span>
          It’s customizable, comes with a ton of extensions, is open source and
          has an extensive documentation.
        </span>
      </AppFooter>
    </AppContainer>
  );
}
const BaseIntro = styled("div")`
  background-color: #31414d;
  line-height: 300px;
  font-size: 40px;
  color: #fff;
  height: 500px;
  text-align: center;
`;

const AppTitle = styled.span`
  font-family: "Unica One", cursive;
  user-select: none;
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 950px }
`;
const blinkCaret = keyframes`from, to { border-color: transparent }
50% { border-color: #e5e5e5; }`;

const AppFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  > span {
    margin: 0 auto;
    font-family: "Unica One", cursive;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid #e5e5e5; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    letter-spacing: 0.15em; /* Adjust as needed */
    text-shadow: 0px 13px 0px black;
    animation: ${typing} 3.5s steps(40, end),
      ${blinkCaret} 0.75s step-end infinite;
  }
`;

const EditorBox = styled.div.attrs({
  className: "m-auto dark:bg-pb-bg w-1/2",
})`
  box-shadow: 0px 0px 6px 3px #253038;
  margin-top: -200px;
  border-radius: 2px;
  div[role="textbox"] {
    min-height: 400px !important;
  }
`;

const AppContainer = styled.div.attrs((props) => {
  return {
    className: `h-screen ${props.theme === "dark" ? "dark" : ""}`,
  };
})``;

const LeftTop = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export default App;
