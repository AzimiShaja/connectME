import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IndexPage from "./pages/IndexPage";
import JobsPage from "./pages/JobsPage";
import MembershipPage from "./pages/MembershipPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/membership" element={<MembershipPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
