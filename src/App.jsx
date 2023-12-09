import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IndexPage from "./pages/IndexPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
