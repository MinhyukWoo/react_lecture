import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./chapter_16/component/page/MainPage";
import PostWritePage from "./chapter_16/component/page/PostWritePage";
import PostViewPage from "./chapter_16/component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage></MainPage>}></Route>
        <Route
          path="post-write"
          element={<PostWritePage></PostWritePage>}
        ></Route>
        <Route
          path="post/:postId"
          element={<PostViewPage></PostViewPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
