import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import IndexPage from "./pages/IndexPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </div>
  );
};

export default App;
