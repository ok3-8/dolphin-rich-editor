import { useState } from "react";
import styled from "styled-components";
import Editor from "./components/Editor";
import EditorMenu from "./components/EditorMenu";

function App() {

  return (
    <AppContainer>
      <EditorBox>
        <EditorMenu />
        <Editor />
      </EditorBox>
    </AppContainer>
      
  );
}

const EditorBox = styled.div.attrs({
  className: "m-auto dark:bg-pb-bg w-1/2",
})``;

const AppContainer = styled.div.attrs({
  className: "dark p-6 h-screen bg-slate-800",
})``;

export default App;
